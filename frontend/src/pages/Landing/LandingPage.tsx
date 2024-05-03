import { useNavigate } from "react-router-dom";

export default function LandingPage () {
  const navigation = useNavigate();

  const goToAdmin = () => navigation("/admin");
  const goToLogin = () => navigation("/auth");
  const goToSignUp = () => navigation("/auth/signup");

  return (
    <div>
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
