import express from "express";
import createMessage from "../controllers/messageController";

const router = express.Router();

router.post("/", createMessage);

export default router;
