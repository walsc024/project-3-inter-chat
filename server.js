const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const Message = require("./models/message");
const socket = require("socket.io");

const PORT = process.env.PORT || 8080;

// Assign the value of your mongoDB connection string to this constant
const dbConnectString =
  "mongodb+srv://walsc024:Poppy2537@cluster0.lcx1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

// Connecting to MongoDB through Mongoose
mongoose
  .connect(dbConnectString)
  .then(() => {
    console.log("connected to the db");

    let server = app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });

    let io = socket(server);

    io.on("connection", (socket) => {
      socket.on("new-message", (data) => {
        io.sockets.emit("new-message", data);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
