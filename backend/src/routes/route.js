const express = require("express");
const { register, login, logout } = require("../controllers/auth");
const { authMiddleware } = require("../middlewares/authMiddleware");
const userRouter = express.Router();
// const authMiddleware = require("../middlewares/authMiddleware");
userRouter.route("/register").post(register);

userRouter.route("/login").post(login);

userRouter.route("/logout").get(authMiddleware, logout);

module.exports = {
  userRouter,
};
