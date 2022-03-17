const express = require("express");
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const usersRouter = require("./routes/user/index");
const User = require("./routes/user/schema");
const Message = require("./routes/message/schema");

const {
  notFoundHandler,
  forbiddenHandler,
  badRequestHandler,
  unAuthorizedHandler,
  catchAllErrorHandler,
} = require("./tools/errorHandlers");
const http = require("http");
const socket = require("socket.io");

const server = express();

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3000/home/me",
  "http://localhost:3000/home/main",
  "https://murmuring-woodland-01068.herokuapp.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Then pass them to cors:
server.use(cors(corsOptions));

const port = process.env.PORT;

server.use(express.json());
server.use(cookieParser()); // to read cookies content

server.use("/user", usersRouter);

// ERROR HANDLERS MIDDLEWARES

server.use(badRequestHandler);
server.use(forbiddenHandler);
server.use(notFoundHandler);
server.use(unAuthorizedHandler);
server.use(catchAllErrorHandler);

console.log(listEndpoints(server));
console.log(listEndpoints(server).length);

const newServerForChat = http.createServer(server);
const io = socket(newServerForChat);

let connectedUser = null;

io.on("connection", (socket) => {
  /**
   * Need to add an event handler for when the user disconnects so i can use do some stuff on the frontend
   */

  io.clients((error, clients) => {
    if (error) throw error;
    console.log("this are the people connected--->", clients);
    connectedUser = clients;

    io.on("connect", (socket) => {
      console.log("Someone connected", clients);
      connectedUser = clients;

      io.emit(connectedUser);
    });

    // io.on("disconnect", (socket) => {
    //   console.log("Someone disconnected", clients);
    // });

    io.sockets.emit("list", connectedUser);

    // io.emit("clients", clients);
  });

  socket.on("my-id", async (data) => {
    const user = await User.findByIdAndUpdate(
      data,
      { socketId: socket.id },
      {
        useFindAndModify: false,
        new: true,
      }
    );
    console.log(data);
  });

  // socket.on("connect", (data) => {
  //   console.log("this are the people connected", data);
  //   io.emit("connect", data);
  // });

  socket.on("private message", ({ text, to, sender, receiver }) => {
    socket.to(to).emit("private message", {
      text,
      from: socket.id,
    });

    const newMessage = new Message({ text, sender, receiver });
    newMessage.save();
  });

  // socket.on("disconnect", async () => {
  //   socket.broadcast.emit("user disconnected", socket.userID);
  // });
});

mongoose
  .connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    newServerForChat.listen(port, () => {
      console.log("Running on port", port);
    })
  )
  .catch((err) => console.log(err));