const express = require("express");
const { connectDb } = require("./utils/db");
const { userRouter } = require("./routes/route");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/v1/auth", userRouter);

app.get("/", (req, res) => {
  res.send("AI_TEXT SUMMARIZER");
});

const connect = async () => {
  await connectDb(process.env.MONGO_URL);
  app.listen(PORT, async () => {
    console.log(`server is connected to PORT:${PORT}`);
  });
};

connect();
