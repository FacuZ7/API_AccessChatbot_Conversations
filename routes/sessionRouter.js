import express from "express";
import {
    getSessionById,
    createSession,
    updateSession,
    // getAllSessions
  } from "../controllers/sessionController.js";

const router = express.Router();

// router.get("/", (req, res)=>{
//   res.json('endpoint working');
// });
// router.get("/", getAllSessions);
router.get("/:id", getSessionById);
router.post("/", createSession);
router.patch("/:id", updateSession);

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error en session.js!");
});

export default router;