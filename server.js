const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const http = require("http");

const Message = require("./models/message");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const PORT = process.env.PORT || 8080;

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const FIND_USER = "findUser";
const NEW_USER_FOUND = "newUserFound";
const ADDED_TO_QUEUE = "addedToQueue";

const queuedUsers = [];

// Assign the value of your mongoDB connection string to this constant
const dbConnectString =
  "mongodb+srv://walsc024:Poppy2537@cluster0.lcx1i.mongodb.net/interchat?retryWrites=true&w=majority";

// Updating mongoose's promise version
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Name of the header and value of the header
  res.header("Access-Control-Allow-Headers", "Content-Type"); //Specify what type of header we are passing through the content
  res.header("Access-Control-Allow-Methods", "GET, POST"); // What methods are allowed
  next(); //Make sure program goes on in execution
});

// Middleware to parse the request body as json
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", () => {
  console.log("You hit the home route");
});

// GET all the previous messages
app.get("/api/message", (req, res) => {
  console.log("AM I HITTING THIS!!!!!!!!!!!");
  Message.find({}).exec((err, messages) => {
    if (err) {
      res.send(err).status(500);
    } else {
      res.send(messages).status(200);
    }
  });
});

// POST a new message
app.post("/api/message", (req, res) => {
  Message.create(req.body)
    .then((message) => {
      res.send(message).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send(err).status(500);
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
  });
}

const checkForMatchingUser = (fluentLanguage, trainingLanguage) =>
  queuedUsers.find(
    (user) =>
      fluentLanguage === user.trainingLanguage &&
      trainingLanguage === user.fluentLanguage
  );

const addUserToQueue = (socketId, fluentLanguage, trainingLanguage) => {
  // @TODO - EMIT AN EVENT TO TELL FE YOURE IN QUEUE
  io.to(socketId).emit(ADDED_TO_QUEUE);

  queuedUsers.push({ socketId, fluentLanguage, trainingLanguage });
};

//When user clicks start chat...

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  const matchTwoUsersTogether = (userOneSocketId, userTwoSocketId) => {
    const userOneSocket = io.sockets.sockets.get(userOneSocketId);
    const userTwoSocket = io.sockets.sockets.get(userTwoSocketId);

    const roomId = `${userOneSocketId + userTwoSocketId}`;

    userOneSocket.join(roomId);
    userTwoSocket.join(roomId);

    io.in(roomId).emit(NEW_USER_FOUND, {
      roomId,
    });
  };

  const { id } = socket;

  socket.on(FIND_USER, (data) => {
    console.log("called with ", data);
    const { fluentLanguage, trainingLanguage } = data;

    const matchedUser = checkForMatchingUser(fluentLanguage, trainingLanguage);

    if (matchedUser) {
      matchTwoUsersTogether(id, matchedUser.socketId);
    } else {
      console.log("There was no user to match");
      addUserToQueue(id, fluentLanguage, trainingLanguage);
    }
  });

  socket.on(NEW_CHAT_MESSAGE_EVENT, ({ roomId, ...rest }) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, rest);
  });

  socket.on("disconnect", () => {
    // @TOOD - How does the disconnect CB know what room id the socket was in?
    console.log(`Client ${socket.id} diconnected`);

    // if (data.roomId) {
    //   socket.leave(roomId);
    // }
  });
});

// Connecting to MongoDB through Mongoose
mongoose
  .connect(dbConnectString)
  .then(() => {
    console.log("connected to the db");

    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
