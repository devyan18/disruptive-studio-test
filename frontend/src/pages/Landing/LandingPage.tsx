import { useNavigate } from "react-router-dom";

import styles from "./Landing.module.css";

export default function LandingPage () {
  const navigation = useNavigate();

  const goToAdmin = () => navigation("/admin");
  const goToLogin = () => navigation("/auth");
  const goToSignUp = () => navigation("/auth/signup");

  return (
    <div className={styles.LandingPage}>
      <h1>LandingPage</h1>
      <button
        onClick={goToAdmin}
      >Go to Admin panel</button>
      <button
        onClick={goToLogin}
      >Go to login</button>
      <button
        onClick={goToSignUp}
      >Go to SignUp</button>
    </div>
  );
}
