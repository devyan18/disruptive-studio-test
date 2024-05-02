import { Router } from "express";
import { authController } from "./dependencies";
import { newUserValidations } from "../users/validations/user-saver";
import { applyValidations } from "../../common/middlewares/apply-validations";
import passport from "passport";

const authRouter = Router();

authRouter.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  authController.me.bind(authController)
);

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
