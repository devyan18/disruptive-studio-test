import { useNavigate } from "react-router-dom";

export default function LandingPage () {
  const navigation = useNavigate();

  const goToLogin = () => {
    // Navigate to the login page
    navigation("/auth");
  };

  const goToSignUp = () => {
    // Navigate to the sign up page
    navigation("/auth/signup");
  };

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
