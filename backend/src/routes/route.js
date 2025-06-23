const express = require("express");
const { register, login, logout } = require("../controllers/auth");
const userRouter = express.Router();

userRouter.route("/auth/register").post(register);

userRouter.route("/auth/login").post(login);

userRouter.route("/auth/logout").get(logout);

module.exports = {
  userRouter,
};
