import express from "express";
import morgan from "morgan";
import cors from "cors";

import http from "node:http";
import { Server, Socket } from "socket.io";

import { apiv1Router } from "./api/api-router";

export const buildApp = () => {
  // Create express app
  const app = express();

  const server = http.createServer(app);

  // Middlewares
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

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
