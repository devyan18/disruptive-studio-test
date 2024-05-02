import { AuthController } from "./auth-controller";
import { userRepository } from "../users/dependencies";
import { AuthLogin, AuthRegister } from "./repository/auth-signs";

const authLogin = new AuthLogin(userRepository);

const authRegister = new AuthRegister(userRepository);

export const authController = new AuthController(
  authLogin,
  authRegister
);
