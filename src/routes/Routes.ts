import { Router } from "express";
import messageRoutes from "./messageRoutes";
import userRoutes from "./userRoutes";

const router = Router();

router.use("/msg", messageRoutes); //Message routes
router.use("/user", userRoutes); //User routes

export default router;
