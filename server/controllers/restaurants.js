const Restaurant = require("../models/restaurant");
const api = process.env.API_URL;

// http://localhost:5000/restaurants/
const getRestaurants = async (req, res) => {
  debugger;
  const restaurantsList = await Restaurant.find();
  if (!restaurantsList) {
    res.status(500).json({ success: false });
  }
  res.send(restaurantsList);
};

// http://localhost:5000/restaurants
const addRestaurants = async (req, res) => {
  await Restaurant.create({
    name: req.body.name,
    specials: req.body.specials,
    location: req.body.location,
    image: req.body.image,
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

module.exports = { getRestaurants, addRestaurants };
