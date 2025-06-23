const mongoose = require("mongoose");

const connectDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log(`connected to DataBase....`);
  } catch (e) {
    console.log(`DB carshed ${e}`);
  }
};

module.exports = {
  connectDb,
};
