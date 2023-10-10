const Dietary = require("../models/dietary");
const api = process.env.API_URL;

// http://localhost:5000/dieteries/
const getDieteries = async (req, res) => {
  const dieteriesList = await Dietary.find();
  if (!dieteriesList) {
    res.status(500).json({ success: false });
  }
  res.send(dieteriesList);
};

// http://localhost:5000/dieteries
const addDieteries = async (req, res) => {
  await Dietary.create({
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

module.exports = { getDieteries, addDieteries };
