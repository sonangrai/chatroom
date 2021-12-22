const express = require("express");
const { saveMsg } = require("../controllers/Message");
const router = express.Router();

/**
 * Save the Message to mongodb
 */
router.post("/msg", saveMsg);

module.exports = router;
