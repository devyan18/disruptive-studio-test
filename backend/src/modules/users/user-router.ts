import { Router } from "express";
import { userController } from "./dependencies";
import { applyValidations } from "../../common/middlewares/apply-validations";
import { userByEmailValidations, userByIdValidations } from "./validations/user-finder";

const userRouter = Router();

userRouter.get(
  "/",
  userController.getAllUsers.bind(userController)
);

userRouter.get(
  "/email",
  userByEmailValidations,
  applyValidations,
  userController.getUserByEmail.bind(userController)
);

userRouter.get(
  "/:id",
  userByIdValidations,
  applyValidations,
  userController.getUserById.bind(userController)
);

export { userRouter };
