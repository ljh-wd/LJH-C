const express = require("express");
const router = express.Router();

const { getSingleLegwear, getAllLegwear } = require("../Controllers/legwear");

router.route("/").get(getAllLegwear);
router.route("/:id").get(getSingleLegwear);

module.exports = router;
