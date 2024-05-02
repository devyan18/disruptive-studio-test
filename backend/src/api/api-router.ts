import { Router } from "express";

import { healthRouter } from "../modules/health/health-router";
import { userRouter } from "../modules/users/user-router";
import { temathicRouter } from "../modules/temathic/temathic-router";

import "../modules/auth/passport-config";
import { authRouter } from "../modules/auth/auth-router";

const apiv1Router = Router();

apiv1Router.use("/health", healthRouter);
apiv1Router.use("/users", userRouter);
apiv1Router.use("/temathic", temathicRouter);
apiv1Router.use("/auth", authRouter);

export { apiv1Router };
