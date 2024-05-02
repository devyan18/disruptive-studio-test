import express from "express";
import morgan from "morgan";
import cors from "cors";

import { apiv1Router } from "./api/api-router";

export const buildApp = () => {
  // Create express app
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Apis
  app.use("/api", apiv1Router);

  return app;
};
