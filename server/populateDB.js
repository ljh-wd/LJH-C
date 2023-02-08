const connectDB = require("../server/DB/connectDB");
require("dotenv").config();
const Tops = require("./models/Tops");
// const jsonCoats = require("./data/coats.json");
// const jsonGymwear = require("./data/gymwear.json");
// const jsonJumpers = require("./data/jumpers.json");
// const jsonLegwear = require("./data/legwear.json");
// const jsonTailoring = require("./data/tailoring.json");
const jsonTops = require("./data/tops.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Tops.deleteMany();
    await Tops.create(jsonTops);

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
