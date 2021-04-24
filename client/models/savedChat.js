const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const savedChat = new Schema({
  id: {
    type: Number,
  },
  sentMessage: [
    {
      content: {
        type: String,
      },
      day: {
        type: Date,
        default: () => new Date(),
      },
    },
  ],
  recievedMessage: [
    {
      content: {
        type: String,
      },
      day: {
        type: Date,
        default: () => new Date(),
      },
    },
  ],
});

const Chat = mongoose.model("Chat", savedChat);

module.exports = Chat;
