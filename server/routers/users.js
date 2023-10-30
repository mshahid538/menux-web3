const express = require("express");
const router = express.Router();
const usersC = require("../controllers/users");
const loginU = require("../controllers/login");

router.route("/").get(usersC.getUsers).post(usersC.addUsers);
router.route("/login").post(loginU.loginUser);

// router.route("/:id");

module.exports = router;
