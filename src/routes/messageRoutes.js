import { Router } from "express";
import { saveMsg } from "../controllers/Message";
const router = Router();

/**
 * Save the Message to mongodb
 */
router.post("/msg", saveMsg);

module.exports = router;
