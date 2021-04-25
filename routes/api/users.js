const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .get(userController.findAllUsers)
  .post(userController.createNewUser)
  .put(userController.updateLanguagePreferences);

module.exports = router;
