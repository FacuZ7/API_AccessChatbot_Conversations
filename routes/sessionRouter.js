import express from "express";
import {
    getSessionById,
    createSession,
    updateSession
  } from "../controllers/sessionController";

const router = express.Router();

router.get("/session/:id", getSessionById);
router.post("/session", createSession);
router.patch("/session/:id", updateSession);

export default router;