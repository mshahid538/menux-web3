const User = require("../models/login");
const api = process.env.API_URL;

// http://localhost:5000/login/

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  // Hard-coded username and password
  const hardcodedUsername = "admin";
  const hardcodedPassword = "admin";

  if (username === hardcodedUsername && password === hardcodedPassword) {
    res.status(200).json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({
      success: false,
      message: "Incorrect Username and Password!",
    });
  }
};

module.exports = { loginUser };
