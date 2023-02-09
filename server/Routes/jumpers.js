const express = require("express");
const router = express.Router();

const { getSingleJumper, getAllJumpers } = require("../Controllers/jumpers");

router.route("/").get(getAllJumpers);
router.route("/:id").get(getSingleJumper);

module.exports = router;
