const dbUser = require("../models/userInfo");

module.exports = {
  findAllUsers: function (req, res) {
    dbUser.find().then((dbUsers) => res.json(dbUsers));
  },
  createNewUser: function (req, res) {},
  updateLanguagePreferences: function (req, res) {},
};
