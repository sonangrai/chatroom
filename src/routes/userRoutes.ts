import { Router } from "express";
import { saveUser } from "../controllers/User";
const router = Router();

//Save user
router.post("/", saveUser);

export default router;
