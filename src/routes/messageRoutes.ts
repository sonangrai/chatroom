import { Router } from "express";
import { getMsg, saveMsg } from "../controllers/Message";

const router = Router();

/**
 * Save the Message to mongodb
 */
router.post("/", saveMsg);

/**
 * Get the Message from mongodb
 */
router.get("/", getMsg);

export default router;
