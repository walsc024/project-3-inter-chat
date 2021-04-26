const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userInfo = new Schema({
  credentials: [
    {
      name: {
        type: String,
      },
      sub: {
        type: Number,
      },
      email: {
        type: String,
      },
      desired: {
        type: String,
      },
      current: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("User", userInfo);

module.exports = User;
