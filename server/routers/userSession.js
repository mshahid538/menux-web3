const express = require("express");
const router = express.Router();
const userSessionC = require("../controllers/userSession");

router.get("/", userSessionC.getUserSession);
router.post("/", userSessionC.addUserSession);


module.exports = router;