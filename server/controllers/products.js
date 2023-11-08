const Product = require("../models/product");
const Ingredient = require("../models/ingredient");
const api = process.env.API_URL;

// https://menux-web.onrender.com/products/
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

// https://menux-web.onrender.com/products
const addProducts = async (req, res) => {
  await Product.create(req.body)
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

// http://localhost:5000/products/:id
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.findByIdAndRemove(productId);

    if (deletedProduct) {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updateData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true }
    );

    if (updatedProduct) {
      res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: updatedProduct,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
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

module.exports = {
  getProducts,
  addProducts,
  deleteProduct,
  updateProduct,
  addIngredients,
};
