import express from "express";
import {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  updateActivity,
} from "../controllers/sessionController.js";

const router = express.Router();

router.get("/", getAllSessions);
router.get("/:id", getSessionById);
router.post("/", createSession);
router.patch("/updateSession/:id", updateSession);
router.patch("/updateActivity/:id", updateActivity);

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error en session.js!");
});

export default router;
