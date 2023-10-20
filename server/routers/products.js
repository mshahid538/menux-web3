const express = require("express");
const router = express.Router();
const productsC = require("../controllers/products");

router.route("/").get(productsC.getProducts).post(productsC.addProducts);

router.route("/:id").put(productsC.addIngredients);

module.exports = router;
