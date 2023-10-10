const Category = require("../models/category");
const api = process.env.API_URL;

// http://localhost:5000/categories/
const getCategories = async (req, res) => {
  const categoriesList = await Category.find();
  if (!categoriesList) {
    res.status(500).json({ success: false });
  }
  res.send(categoriesList);
};

// http://localhost:5000/categories
const addCategories = async (req, res) => {
  await Category.create({
    name: req.body.name,
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

module.exports = { getCategories, addCategories };
