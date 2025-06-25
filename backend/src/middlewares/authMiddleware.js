const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const header = req.headers.token;
    console.log("header:", header);
    if (!header || !header.startsWith("Bearer")) {
      return res.status(403).json({
        message: "please login again....",
      });
    }
    const token = header.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.PRIVATE_KEY);
    console.log("decoded:", decoded);
    req.user = {
      email: decoded.data,
    };
    next();
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  authMiddleware,
};
