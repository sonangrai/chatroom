import express, { Request, Response } from "express";
import { Server } from "socket.io";
import http from "http";
import path from "path";
require("dotenv").config();

const app = express();

//Creating an http server
const server = http.createServer(app);
//Implemented the server in the socket
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

/**
 * The connection event
 */
io.on("connection", (socket) => {
  socket.on("connected", (msg) => {
    io.emit("user connected", msg);
  });
  socket.on("send message", (data) => {
    io.emit("msgreceived", data);
  });
});

/**
 * Serving html
 */
app.get("/", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});

/**
 * Main server
 */
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("App running in", port);
});
