const User = require("../models/user");
const api = process.env.API_URL;

// http://localhost:5000/users/
const getUsers = async (req, res) => {
  debugger;
  const usersList = await User.find();
  if (!usersList) {
    res.status(500).json({ success: false });
  }
  res.send(usersList);
};

// http://localhost:5000/users
const addUsers = async (req, res) => {
  await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    visitDate: req.body.visitDate,
    userIP: req.body.userIP,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
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

module.exports = { getUsers, addUsers };
