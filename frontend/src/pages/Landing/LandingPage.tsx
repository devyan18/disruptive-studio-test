import { useNavigate } from "react-router-dom";

export default function LandingPage () {
  const navigation = useNavigate();

  const goToLogin = () => navigation("/auth");
  const goToSignUp = () => navigation("/auth/signup");

  return (
    <div>
      <button
        onClick={goToLogin}
      >Go to login</button>
      <button
        onClick={goToSignUp}
      >Go to SignUp</button>
    </div>
  );
}
