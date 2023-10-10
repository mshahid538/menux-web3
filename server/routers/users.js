const express = require("express");
const router = express.Router();
const usersC = require("../controllers/users");

router.route("/").get(usersC.getUsers).post(usersC.addUsers);

// router.route("/:id");

module.exports = router;
