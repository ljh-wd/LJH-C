const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async (url) => {
  mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = connectDB;
