const express = require("express");
const router = express.Router();

const {
  getSingleTailoring,
  getAllTailoring,
} = require("../Controllers/tailoring");

router.route("/").get(getAllTailoring);
router.route("/:id").get(getSingleTailoring);

module.exports = router;
