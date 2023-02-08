const mongoose = require("mongoose");
const { Schema } = mongoose;

const FootwearSchema = new Schema({
  name: { type: String },
  amount: { type: Number },
  sizes: [{ type: Number }],
  imgUrl: { type: String },
  colour: [{ type: String }],
  gender: { type: String },
});

module.exports = mongoose.model("Footwear", FootwearSchema);
