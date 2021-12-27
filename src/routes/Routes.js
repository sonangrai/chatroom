import { Router } from "express";
import messageRoutes from "./messageRoutes";

const router = Router();

router.use(messageRoutes);

export default router;
