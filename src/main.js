const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const path = require("path");
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

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("chat/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "chat", "build", "index.html"));
  });
}

/**
 * Main server
 */
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("App running in", port);
});
