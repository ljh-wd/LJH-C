const Tops = require("../Models/tops");

const getAllTops = async (req, res) => {
  const products = await Tops.find({});
  res.status(200).json(products);
};

module.exports = { getAllTops };
