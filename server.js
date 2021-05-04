const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const http = require("http");

const Message = require("./models/message");
const translation = require("./utils/translation");

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
const NEW_CHAT_MESSAGE = "newChatMessage";

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
  //EMIT AN EVENT TO TELL FE YOURE IN QUEUE
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

  socket.on(
    NEW_CHAT_MESSAGE,
    ({ roomId, fluentLanguage, trainingLanguage, ...rest }) => {
      translation(fluentLanguage, trainingLanguage, rest.body).then(
        (trainingResponse) => {
          translation(trainingLanguage, fluentLanguage, rest.body).then(
            (fluentResponse) => {
              io.in(roomId).emit(NEW_CHAT_MESSAGE, {
                fluentTranslation: fluentResponse.result.translations,
                trainingTranslation: trainingResponse.result.translations,
                ...rest,
              });
            }
          );
        }
      );
    }
  );

  socket.on("disconnect", () => {
    // @TOOD - How does the disconnect CB know what room id the socket was in?
    console.log(`Client ${socket.id} diconnected`);

    // if (data.roomId) {
    //   socket.leave(roomId);
    // }
  });

  /**********************************************************************************************************
                                           Translation Socket
 ***********************************************************************************************************/

  //When a translation tag is read from chat
  // socket.on("translate", function (data) {
  //   console.log(data.message);
  //   console.log(data.fluentLanguage);
  //   console.log(data.trainingLanguage);

  //   language_translation.translate(
  //     {
  //       text: data.message,
  //       source: data.fluentLanguage,
  //       target: data.trainingLanguage,
  //     },
  //     function (err, translation) {
  //       console.log("Watson will translate : " + data.message);

  //       if (err) {
  //         console.log("error:", err);

  //         socket.emit("translationResults", {
  //           username: socket.user.nickname,
  //           message: "Error translating. Try again.",
  //         });

  //         socket.broadcast.emit("translationResults", {
  //           username: socket.user.nickname,
  //           message: "Error translating. Try again.",
  //         });
  //       } else {
  //         console.log(translation.translations[0].translation);
  //         data.message = translation.translations[0].translation;

  //         socket.emit("translationResults", {
  //           username: socket.user.nickname,
  //           message: data.message,
  //         });

  //         socket.broadcast.emit("translationResults", {
  //           username: socket.user.nickname,
  //           message: data.message,
  //         });
  //       }
  //     }
  //   );
  // });

  /************************************************************************************************************
                                            Translation Handling
      *************************************************************************************************************/

  //Translate to Spanish
  // if (message.substring(0, 18).toLowerCase() == "/translate spanish") {
  //   console.log("sending to translate");
  //   trainingLanguage = "es";
  //   socket.emit("translate", {
  //     message: message.substring(19),
  //     fluentLanguage: fluentLanguage,
  //     trainingLanguage: trainingLanguage,
  //   });
  // }
  //Translate to French
  //   else if (message.substring(0, 17).toLowerCase() == "/translate french") {
  //     console.log("sending to translate");
  //     trainingLanguage = "fr";
  //     socket.emit("translate", {
  //       message: message.substring(18),
  //       fluentLanguage: fluentLanguage,
  //       trainingLanguage: trainingLanguage,
  //     });
  //   } else if (message.substring(0, 17).toLowerCase() == "/translate english") {
  //     console.log("sending to translate");
  //     trainingLanguage = "en";
  //     socket.emit("translate", {
  //       message: message.substring(18),
  //       fluentLanguage: fluentLanguage,
  //       trainingLanguage: trainingLanguage,
  //     });
  //   }
});

// Connecting to MongoDB through Mongoose
mongoose
  .connect(process.env.MONGODB_URI || dbConnectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to the db");

    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
