import { login } from "../controllers/adminController";
import { Router } from "express";

const router = Router();

router.post("/login", login);

export default router;
