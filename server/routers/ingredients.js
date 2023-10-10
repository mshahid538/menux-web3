const express = require("express");
const router = express.Router();
const ingredientC = require("../controllers/ingredients");

router
  .route("/")
  .get(ingredientC.getIngredients)
  .post(ingredientC.addIngredients);

// router.route("/:id");

module.exports = router;
