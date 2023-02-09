const express = require("express");
const router = express.Router();

const { getSingleGymwear, getAllGymwear } = require("../Controllers/gymwear");

router.route("/").get(getAllGymwear);
router.route("/:id").get(getSingleGymwear);

module.exports = router;
