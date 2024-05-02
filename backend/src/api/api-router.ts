import { Router } from "express";
import { healthRouter } from "../modules/health/health-router";
import { userRouter } from "../modules/users/user-router";

const apiv1Router = Router();

apiv1Router.use("/health", healthRouter);
apiv1Router.use("/users", userRouter);

export { apiv1Router };
