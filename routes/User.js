const express = require("express");
const { saveUser } = require("../controllers/User");
const router = express.Router();

//Save user
router.post("/user", saveUser);

module.exports = router;
