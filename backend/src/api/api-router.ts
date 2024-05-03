import { Router } from "express";

import { healthRouter } from "../modules/health/health-router";
import { userRouter } from "../modules/users/user-router";
import { temathicRouter } from "../modules/temathic/temathic-router";

import "../modules/auth/passport-config";
import { authRouter } from "../modules/auth/auth-router";
import { upload } from "../settings/uploadConfig";
import { categoryRouter } from "../modules/category/category-router";

const apiv1Router = Router();

apiv1Router.use("/health", healthRouter);
apiv1Router.use("/users", userRouter);
apiv1Router.use("/temathic", temathicRouter);
apiv1Router.use("/auth", authRouter);
apiv1Router.use("/category", categoryRouter);

apiv1Router.post("/upload", upload.single("file"), (req, res) => {
  try {
    res.send({ message: "Archivo cargado con éxito!" });
  } catch (error) {
    res.status(400).send({ message: "Error al cargar el archivo" });
  }
});

export { apiv1Router };
