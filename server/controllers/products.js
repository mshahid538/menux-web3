const Product = require("../models/product");
const Ingredient = require("../models/ingredient");
const api = process.env.API_URL;

// http://localhost:5000/products/
const getProducts = async (req, res) => {
  const productsList = await Product.find().populate(
    "freeFrom ingredients mayContain notSuitable",
    "name"
  );
  if (!productsList) {
    res.status(500).json({ success: false });
  }
  res.send(productsList);
};

// http://localhost:5000/products
const addProducts = async (req, res) => {
  await Product.create({
    name: req.body.name,
    description: req.body.description,
  })
    .then((createdItem) => {
      res.status(200).json(createdItem);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
};

const addIngredients = async (req, res) => {
  const { ingredientId, type } = req.body;
  const types = ["notSuitable", "mayContain", "freeFrom"];

  const ingredient = await Ingredient.findById(ingredientId);
  if (!ingredient)
    return res.status(400).json({ message: "Incorrect ingredient" });
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(400).json({ message: "Incorrect product" });
  console.log();

  if (!types.includes(type))
    return res.status(400).json({ message: "no such type" });

  if (product?.[type].includes(ingredientId))
    return res.status(400).json({ message: `${type} already exist` });
  product?.[type].push(ingredientId);

  const updatedProduct = await product.save();
  res.status(200).json({ message: "Product added", data: updatedProduct });
};

module.exports = { getProducts, addProducts, addIngredients };
