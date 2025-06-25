const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userMOdel = require("../models/users");
require("dotenv").config();

const register = async (req, res) => {
  try {
    console.log("in register...");
    const { email, password } = req.body;
    console.log(req.body);
    const duplicateUser = await userMOdel.findOne({ email: email });
    console.log(duplicateUser);
    if (duplicateUser) {
      return res.status(409).json({
        message: "PLease register with different Email-Id",
      });
    }
    console.log(process.env.SALT_ROUNDS);
    const salt = parseInt(process.env.SALT_ROUNDS);
    bcrypt.hash(password, salt, async function (err, hash) {
      if (err) {
        return res.status(409).json({
          message: "Please try with a different email...",
        });
      }
      const data = await userMOdel.create({
        email: email,
        password: hash,
      });
      res.json({
        msg: "Congratulations! Your account has been successfully created.",
      });
    });
  } catch (e) {
    res.status(500).json({
      message: `Please try again later.....Error:`,
      error: e,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userMOdel.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      jwt.sign(
        { data: email },
        process.env.PRIVATE_KEY,
        { expiresIn: 60 * 60 },
        (err, token) => {
          // console.log(token);
          if (err) {
            res.status(500).json({
              message: "please try again later...",
            });
          }

          res
            .status(200)
            .setHeader(`token`, `Bearer ${token}`)
            .json({
              message: "Login successfull",
              token: `Bearer ${token}`,
            });
        }
      );
    }
  } catch (error) {
    res.status(500).json({
      message: `Please try again later.....Error:${error}`,
    });
  }
};

const logout = (req, res) => {
  res.json({
    message: "Hello... from logout endpoint",
  });
};

module.exports = {
  register,
  login,
  logout,
};
