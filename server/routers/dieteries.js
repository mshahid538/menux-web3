const express = require("express");
const router = express.Router();
const dieteriesC = require("../controllers/dieteries");

router.route("/").get(dieteriesC.getDieteries).post(dieteriesC.addDieteries);

// router.route("/:id");

module.exports = router;
