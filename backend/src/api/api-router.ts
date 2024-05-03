import { Router } from "express";

import { healthRouter } from "../modules/health/health-router";
import { userRouter } from "../modules/users/user-router";
import { thematicRouter } from "../modules/thematic/thematic-router";

import "../modules/auth/passport-config";
import { authRouter } from "../modules/auth/auth-router";
import { upload } from "../settings/uploadConfig";
import { categoryRouter } from "../modules/category/category-router";
import { multimediaRouter } from "../modules/multimedia/multimedia-router";

const apiv1Router = Router();

apiv1Router.use("/health", healthRouter);
apiv1Router.use("/users", userRouter);
apiv1Router.use("/temathic", thematicRouter);
apiv1Router.use("/auth", authRouter);
apiv1Router.use("/category", categoryRouter);
apiv1Router.use("/multimedia", multimediaRouter);

apiv1Router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  try {
    res.json({ data: file?.filename });
  } catch (error) {
    res.status(400).send({ message: "Error al cargar el archivo" });
  }
});

export { apiv1Router };
