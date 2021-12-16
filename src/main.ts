import express, { Request, Response } from "express";
import { Server } from "socket.io";
import http from "http";
import path from "path";
import cors from "cors";

const app = express();

//Creating an http server
const server = http.createServer(app);
//Implemented the server in the socket
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
app.use(cors());

/**
 * The connection event
 */
io.on("connection", (socket) => {
  socket.on("sendmsg", (data) => {
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
const port: Number = 4000;
server.listen(port, () => {
  console.log("App running in", port);
});
