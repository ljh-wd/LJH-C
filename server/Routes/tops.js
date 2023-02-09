const express = require("express");
const router = express.Router();

const { getAllTops, getSingleTop } = require("../Controllers/tops");

router.route("/").get(getAllTops);
router.route("/:id").get(getSingleTop);

module.exports = router;
