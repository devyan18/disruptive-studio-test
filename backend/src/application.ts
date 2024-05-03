import express from "express";
import morgan from "morgan";
import cors from "cors";

import path from "node:path";

import http from "node:http";
import { Server, Socket } from "socket.io";

import { apiv1Router } from "./api/api-router";
import passport from "passport";

export const buildApp = () => {
  // Create express app
  const app = express();

  const server = http.createServer(app);

  // Middlewares
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const pathOfPublic = path.join(__dirname, "uploads");

  app.use(
    "/public",
    passport.authenticate("jwt", { session: false }),
    express.static(pathOfPublic)
  );

  // Apis
  app.use("/api", apiv1Router);

  // Socket.io
  const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  io.on("connection", (socket: Socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  return server;
};
