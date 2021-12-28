"use strict";

const express = require("express");

const {
  Server
} = require("socket.io");

const http = require("http");

const path = require("path");

const dbConnect = require("../utils/dbConnect");

require("dotenv").config();

const app = express(); //Creating an http server

const server = http.createServer(app); //Implemented the server in the socket

const io = new Server(server, {
  transports: ["polling"],
  cors: {
    origin: "*"
  }
});
/**
 * The connection event
 */

io.on("connection", socket => {
  socket.on("connected", data => {
    io.emit("user connected", data);
  });
}); //Exporting io
//exports.io = io;

app.use(function (req, res, next) {
  res.io = io;
  next();
}); // Serve static assets in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("chat/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./chat/build/index.html"));
  });
} //Connecting to db


dbConnect(); //Validating json usage

app.use(express.json({
  extended: false
}));
/**
 * Declaring routes
 */

app.use("/api", require("../routes/User"));
app.use("/api", require("../routes/Message"));
/**
 * Main server
 */

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("App running in", port);
});
//# sourceMappingURL=main.js.map