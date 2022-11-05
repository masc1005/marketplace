const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const dotenv = require("dotenv");

const socket = require("socket.io");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    io.sockets.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected: ", socket.id);
  });
});
