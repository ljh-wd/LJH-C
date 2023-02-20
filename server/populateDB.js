const connectDB = require("../server/DB/connectDB");
require("dotenv").config();

const Products = require("./models/Products");
const jsonProducts = require("./data/Products.json");

// const Footwear = require("./models/footwear");
// const jsonFootwear = require("./data/footwear.json");

// const Coats = require("./models/coats");
// const jsonCoats = require("./data/coats.json");

// const Tailoring = require("./models/tailoring");
// const jsonTailoring = require("./data/tailoring.json");

// const Gymwear = require("./models/gymwear");
// const jsonGymwear = require("./data/gymwear.json");

// const Jumpers = require("./models/jumpers");
// const jsonJumpers = require("./data/jumpers.json");

// const Legwear = require("./models/legwear");
// const jsonLegwear = require("./data/legwear.json");

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
