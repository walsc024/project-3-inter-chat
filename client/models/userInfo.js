const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userInfo = new Schema({
  credentials: [
    {
      name: {
        type: String,
      },
      userId: {
        type: Number,
      },
      email: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("User", userInfo);

module.exports = User;
