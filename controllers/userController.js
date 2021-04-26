const dbUser = require("../models/userInfo");

module.exports = {
  findAllUsers: function (req, res) {
    dbUser
      .find()
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => res.status(422).json(err));
  },
  createNewUser: function (req, res) {
    dbUser
      .create()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateLanguagePreferences: function (req, res) {
    dbUser
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
