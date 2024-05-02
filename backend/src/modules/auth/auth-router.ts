import { Router } from "express";
import { authController } from "./dependencies";
import { newUserValidations } from "../users/validations/user-saver";
import { applyValidations } from "../../common/middlewares/apply-validations";

const authRouter = Router();

authRouter.post(
  "/login",
  authController.login.bind(authController)
);

authRouter.post(
  "/register",
  newUserValidations,
  applyValidations,
  authController.register.bind(authController)
);

export { authRouter };
