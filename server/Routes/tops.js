const express = require("express");
const router = express.Router();

const { getAllTops } = require("../Controllers/tops");

router.route("/").get(getAllTops);

module.exports = router;
