const express = require("express");
const { saveUser } = require("../controllers/User");
const router = express.Router();

//Save uSer
router.post("/user", saveUser);

module.exports = router;
