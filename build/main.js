"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
require("dotenv").config();
const app = (0, express_1.default)();
//Creating an http server
const server = http_1.default.createServer(app);
//Implemented the server in the socket
const io = new socket_io_1.Server(server, {
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
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendFile(path_1.default.join(__dirname + "/../public/index.html"));
}));
/**
 * Main server
 */
const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log("App running in", port);
});
