const Category = require("../models/category");
const api = process.env.API_URL;

// http://localhost:5000/categories/
const getCategories = async (req, res) => {
  try {
    const categoriesList = await Category.find();
    res.send(categoriesList);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// http://localhost:5000/categories
const addCategory = async (req, res) => {
  try {
    const createdItem = await Category.create({
      name: req.body.name,
    });
    res.status(200).json(createdItem);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// http://localhost:5000/categories/:id
const updateCategory = async (req, res) => {
  try {
    const updatedItem = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// http://localhost:5000/categories/:id
const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getCategories, addCategory, updateCategory, deleteCategory };
