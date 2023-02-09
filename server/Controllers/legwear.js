const Legwear = require("../Models/legwear");
const { createCustomError } = require("../errors/custom-error");

const getAllLegwear = async (req, res) => {
  const { name, amount, sizes, colour, gender, numericFilters, sort } =
    req.query;

  const queryObject = {};

  if (name) queryObject.name = { $regex: name, $options: "i" };
  if (amount) queryObject.amount = amount;
  if (sizes) queryObject.sizes = sizes;
  if (colour) queryObject.colour = { $regex: colour, $options: "i" };
  if (gender) queryObject.gender = gender;

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(<|>|>=|=|<|<=)\b/g;

    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["amount"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Legwear.find(queryObject);
  if (sort) {
    // ? sortList will split the result to add a comma, then it will add a space. This allows chain sorting.
    // ? Then the result will be sorted if sort is queried, else the result wont be sorted and the default value will apply.
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }

  const products = await result;

  res.status(200).json({ products, nbHits: products.length });
};

const getSingleLegwear = async (req, res, next) => {
  const { id: legwearID } = req.params;
  const singleLegwear = await Legwear.findById(legwearID);
  if (!singleLegwear) {
    return next(
      createCustomError(
        `Product with the id of ${legwearID} doesn't exist`,
        404
      )
    );
  }
  res.status(200).json({ singleLegwear });
};

module.exports = { getAllLegwear, getSingleLegwear };