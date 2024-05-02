import { Router } from "express";
import { authController } from "./dependencies";

const authRouter = Router();

authRouter.post(
  "/login",
  authController.login.bind(authController)
);

authRouter.post(
  "/register",
  authController.register.bind(authController)
);

export { authRouter };
