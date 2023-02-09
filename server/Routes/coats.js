const express = require("express");
const router = express.Router();

const { getSingleCoat, getAllCoats } = require("../Controllers/coats");

router.route("/").get(getAllCoats);
router.route("/:id").get(getSingleCoat);

module.exports = router;
