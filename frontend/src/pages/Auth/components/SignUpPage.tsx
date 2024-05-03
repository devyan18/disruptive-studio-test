import React from "react";
import { useForm } from "@/common/hooks/useForm";
import { ROLES } from "@/model/User";
import { signUpService } from "../services/auth.services";
import { useSession } from "@/context/auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { saveTokenInLocalStorage } from "@/utilities/localstorage";

import styles from "./styles.module.css";

export default function SignUpPage () {
  const { handleUser } = useSession();
  const navigate = useNavigate();

  const { values, handleReset, handleSetValues } = useForm({
    username: "",
    email: "",
    password: "",
    role: Object.values(ROLES).filter((e) => e !== ROLES.Admin)[0]
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target as HTMLInputElement;
    handleSetValues(target.name as keyof typeof values, target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signUpService(values);

    if (!response) {
      return;
    }

    saveTokenInLocalStorage(response.token);
    handleUser(response.data);
    handleReset();
    navigate("/app");
  };

  return (
    <div className={styles.AuthForm}>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            name="username"
            placeholder="Devyan18"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
            <input
            type="email"
            name="email"
            placeholder="example@example.com"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="**********"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <select name="role" value={values.role} onChange={handleChange}>
          {Object.values(ROLES)
            .filter((role) => role !== ROLES.Admin)
            .map((role) => {
              return (
                <option key={role} value={role}>
                  {role}
                </option>
              );
            })}
        </select>
        <button type="submit">Register</button>
      </form>
      <Link to="/auth">Go to Login</Link>
      <Link to="/app">Start Without Account</Link>
    </div>
  );
}
