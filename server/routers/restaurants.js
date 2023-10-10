const express = require("express");
const router = express.Router();
const restaurantsC = require("../controllers/restaurants");

router
  .route("/")
  .get(restaurantsC.getRestaurants)
  .post(restaurantsC.addRestaurants);

// router.route("/:id");

module.exports = router;
