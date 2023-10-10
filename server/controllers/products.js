const Product = require("../models/product");
const api = process.env.API_URL;

// http://localhost:5000/products/
const getProducts = async (req, res) => {
  const productsList = await Product.find();
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

module.exports = { getProducts, addProducts };
