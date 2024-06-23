import express from "express";
import { createVector } from "../controllers/vectorController.js";

const router = express.Router();

router.post("/", createVector);

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error en conversations.js!");
});

export default router;