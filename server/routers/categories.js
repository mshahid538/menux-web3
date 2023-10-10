const express = require("express");
const router = express.Router();
const categoriesC = require("../controllers/categories");

router
  .route("/")
  .get(categoriesC.getCategories)
  .post(categoriesC.addCategories);

// router.route("/:id");

module.exports = router;
