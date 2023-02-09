const express = require("express");
const router = express.Router();

const {
  getAllFootwear,
  getSingleFootwear,
} = require("../Controllers/footwear");

router.route("/").get(getAllFootwear);
router.route("/:id").get(getSingleFootwear);

module.exports = router;
