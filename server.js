const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

app.use(express.static("public"));

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  
  socket.emit("system", "Welcome to the chat");

  socket.on("chat:send", (msg) => {
  console.log("Message from", socket.id, msg);

  socket.broadcast.emit("chat:receive", {
      id: socket.id,
      message: msg,
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
