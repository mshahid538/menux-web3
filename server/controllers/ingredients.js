const Ingredient = require("../models/ingredient");
const api = process.env.API_URL;

// http://localhost:5000/ingredients/
const getIngredients = async (req, res) => {
  debugger;
  const ingredientsList = await Ingredient.find();
  if (!ingredientsList) {
    res.status(500).json({ success: false });
  }
  res.send(ingredientsList);
};

// http://localhost:5000/ingredients
const addIngredients = async (req, res) => {
  await Ingredient.create({
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

module.exports = { getIngredients, addIngredients };
