const express = require("express");
const router = express.Router();
const loginU = require("../controllers/login");

router.post("/", loginU.loginUser);

module.exports = router;
