const User = require("../models/login");
const api = process.env.API_URL;

// http://localhost:5000/login/

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required" });
  }
  // Hard-coded username and password
  const hardcodedUsername = "admin";
  const hardcodedPassword = "admin";

  if (username === hardcodedUsername && password === hardcodedPassword) {
    res.status(200).json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({
      success: false,
      message: "Incorrect Username or Password!",
    });
  }
};

module.exports = { loginUser };
