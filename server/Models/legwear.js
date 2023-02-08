const mongoose = require("mongoose");
const { Schema } = mongoose;

const LegwearSchema = new Schema({
  name: { type: String },
  amount: { type: Number },
  sizes: [{ type: String }],
  imgUrl: { type: String },
  colour: [{ type: String }],
  gender: { type: String },
});

module.exports = mongoose.model("Legwear", LegwearSchema);
