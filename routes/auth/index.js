const express = require("express");
const router = express.Router();
const passport = require("../../passport");
const usersController = require("../../controllers/usersController");

// this route is just used to get the user basic info not sure if we need this yet
router.get("/user", usersController.getUser);
// hit this route with a post request to login a user
router.post(
  "/login",
  usersController.auth,
  passport.authenticate("local"),
  usersController.authenticate
);
// hit this route with  a post request to logout a user
router.post("/logout", 
  // passport.authenticate("local"), 
  usersController.logout);
// hit this route with a post request to register a user
router.post("/register", usersController.register);

module.exports = router;
