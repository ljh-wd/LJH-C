const Products = require("../Models/Products");
const { createCustomError } = require("../errors/custom-error");

const getAllProducts = async (req, res) => {
  const { name, amount, sort } = req.query;

  const queryObject = {};

  if (name) queryObject.name = { $regex: name, $options: "i" };
  if (amount) queryObject.amount = amount;

  let result = Products.find(queryObject);
  if (sort) {
    // ? sortList will split the result to add a comma, then it will add a space. This allows chain sorting.
    // ? Then the result will be sorted if sort is queried, else the result wont be sorted and the default value will apply.
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }

  const products = await result;

  res.status(200).json({ products });
};

const getSingleProduct = async (req, res, next) => {
  const { id: ProductID } = req.params;
  const singleProduct = await Products.findById(ProductID);
  if (!singleProduct) {
    return next(
      createCustomError(
        `Product with the id of ${ProductID} doesn't exist`,
        404
      )
    );
  }
  res.status(200).json({ singleProduct });
};

module.exports = { getAllProducts, getSingleProduct };
