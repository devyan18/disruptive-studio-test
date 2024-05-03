import { useForm } from "@/common/hooks/useForm";
import React from "react";
import { loginService } from "../services/auth.services";
import { saveTokenInLocalStorage } from "@/utilities/localstorage";
import { useSession } from "@/context/auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

export default function LoginPage () {
  const { handleUser } = useSession();

  const navigate = useNavigate();

  const { values, handleReset, handleSetValues } = useForm({
    email: "",
    password: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    handleSetValues(target.name as keyof typeof values, target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginService(values.email, values.password)
      .then(({ data, token }) => {
        saveTokenInLocalStorage(token);
        handleUser(data);
        handleReset();

        if (data.role === "Admin") {
          return navigate("/admin");
        }
        navigate("/app");
      })
      .catch((error) => {
        console.error(error);
        handleReset();
      }).finally(() => {
        console.log("Login successful");
      });
  };

  return (
    <div className={styles.AuthForm}>
      <h2>Login form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <Link to="/auth/signup">Go to Register</Link>
    </div>
  );
}
