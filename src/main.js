const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const path = require("path");
const dbConnect = require("../utils/dbConnect");
const { ppid } = require("process");
require("dotenv").config();

const app = express();

//Creating an http server
const server = http.createServer(app);
//Implemented the server in the socket
const io = new Server(server, {
  transports: ["polling"],
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

//Exporting io
//exports.io = io;
app.use(function (req, res, next) {
  req.io = io;
  next();
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("chat/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./chat/build/index.html"));
  });
}

//Connecting to db
dbConnect();

//Validating json usage
app.use(express.json({ extended: false }));

/**
 * Declaring routes
 */
app.use("/api", require("../routes/User"));

/**
 * Main server
 */
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("App running in", port);
});
