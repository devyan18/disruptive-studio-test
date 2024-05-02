import { Router } from "express";
import { userController } from "./dependencies";

const userRouter = Router();

userRouter.get("/", userController.getAllUsers.bind(userController));
userRouter.get("/:id", userController.getUserById.bind(userController));
userRouter.get("/email/:email", userController.getUserByEmail.bind(userController));
userRouter.get("/username/:username", userController.getUserByUsername.bind(userController));
userRouter.post("/", userController.createUser.bind(userController));

export { userRouter };
