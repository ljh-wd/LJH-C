const connectDB = require("../server/DB/connectDB");
require("dotenv").config();

const Products = require("./models/Products");
const jsonProducts = require("./data/Products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Products.deleteMany();
    await Products.create(jsonProducts);

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
