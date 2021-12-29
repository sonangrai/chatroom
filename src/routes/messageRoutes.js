import { Router } from "express";
import { getMsg, saveMsg } from "../controllers/Message";
const router = Router();

/**
 * Save the Message to mongodb
 */
router.post("/", saveMsg);

router.get("/", getMsg);

module.exports = router;
