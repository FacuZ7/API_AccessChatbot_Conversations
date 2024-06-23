import express from "express";
import {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  updateActivity,
} from "../controllers/sessionController.js";

const router = express.Router();

/**
 * @swagger
 * /session/:
 *   get:
 *     summary: Traer todas las sesiones
 *     responses:
 *       200:
 *         description: Lista de sesion
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   sessionId:
 *                     type: string
 *                     example: abc123
 *                   chatId:
 *                     type: string
 *                     example: xyz789
 *                   date:
 *                     type: string
 *                     example: 2024-06-16T12:34:56.789+00:00
 *                   createdAt:
 *                     type: string
 *                     example: 2024-06-16T12:34:56.789+00:00
 *                   updatedAt:
 *                     type: string
 *                     example: 2024-06-16T12:34:56.789+00:00
 * /session/{id}:
 *   get:
 *     summary: Traer todas las sesiones
 *     responses:
 *       200:
 *         description: Lista de sesion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sessionId:
 *                   type: string
 *                   example: abc123
 *                 chatId:
 *                   type: string
 *                   example: xyz789
 *                 date:
 *                   type: string
 *                   example: 2024-06-16T12:34:56.789+00:00
 *                 createdAt:
 *                   type: string
 *                   example: 2024-06-16T12:34:56.789+00:00
 *                 updatedAt:
 *                   type: string
 *                   example: 2024-06-16T12:34:56.789+00:00
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error en conversations.js!
 */

/**
 * @swagger
 * /session/:
 *   post:
 *     summary: Crear una nueva sesión
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chat_id:
 *                 type: string
 *                 example: xyz789
 *               last_active:
 *                 type: string
 *                 example: 2024-06-16T12:34:56.789+00:00
 *               session_id:
 *                 type: string
 *                 example: abc123
 *     responses:
 *       201:
 *         description: Sesión creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 chat_id:
 *                   type: string
 *                   example: xyz789
 *                 last_active:
 *                   type: string
 *                   example: 2024-06-16T12:34:56.789+00:00
 *                 session_id:
 *                   type: string
 *                   example: abc123
 *       400:
 *         description: Solicitud inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Parámetros de solicitud inválidos
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al crear la sesión
 */
/**

/**
 * @swagger
 * /session/updateSession/{id}:
 *   patch:
 *     summary: Actualizar una sesión
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la sesión a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chat_id:
 *                 type: string
 *                 example: xyz789
 *               last_active:
 *                 type: string
 *                 example: 2024-06-16T12:34:56.789+00:00
 *               session_id:
 *                 type: string
 *                 example: abc123
 *     responses:
 *       200:
 *         description: Sesión actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 chat_id:
 *                   type: string
 *                   example: xyz789
 *                 last_active:
 *                   type: string
 *                   example: 2024-06-16T12:34:56.789+00:00
 *                 session_id:
 *                   type: string
 *                   example: abc123
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al actualizar el usuario
 */

/**
 * @swagger
 * /session/updateActivity/{id}:
 *   patch:
 *     summary: Actualizar la actividad de una sesión
 *     parameters:
 *       - in: path
 *         ChatId: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la sesión a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chat_id:
 *                 type: string
 *                 example: xyz789
 *               last_active:
 *                 type: string
 *                 example: 2024-06-16T12:34:56.789+00:00
 *               session_id:
 *                 type: string
 *                 example: abc123
 *     responses:
 *       200:
 *         description: Sesión actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 chat_id:
 *                   type: string
 *                   example: xyz789
 *                 last_active:
 *                   type: string
 *                   example: 2024-06-16T12:34:56.789+00:00
 *                 session_id:
 *                   type: string
 *                   example: abc123
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al actualizar el usuario
 */

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
