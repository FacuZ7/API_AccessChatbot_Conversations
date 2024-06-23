import express from "express";
import {
  getConversations,
  getConversationBySessionId,
  createConversation,
  saveMessages,
  saveFeedback,
  getMessages,
} from "../controllers/conversationController.js";

const router = express.Router();

/**
 * @swagger
 * /conversations/{id}/{sessionId}/messages:
 *   get:
 *     summary: Traer todas las conversaciones
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
 *                   chat_id:
 *                     type: string
 *                     example: abc123
 *                   user_id:
 *                     type: string
 *                     example: xyz789
 *                   session_id:
 *                     type: string
 *                     example: 2024-06-16T12:34:56.789+00:00
 *                   messages:
 *                     type: Array
 *                     example: 2024-06-16T12:34:56.789+00:00
 *                   status:
 *                     type: string
 *                     example: 2024-06-16T12:34:56.789+00:00
 * /session/findBySessionId/{id}:
 *   get:
 *     summary: Traer conversacion por id
 *     responses:
 *       200:
 *         description: Lista de sesion
 *         content:
 *           application/json:
 *             schema:
 *                 properties:
 *                   sessionId:
 *                     type: string
 *                     example: abc123
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
 * /conversations/:
 *   get:
 *     summary: Traer todas las conversaciones
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
 *                   chat_id:
 *                     type: string
 *                     example: abc123
 *                   user_id:
 *                     type: string
 *                     example: xyz789
 *                   session_id:
 *                     type: string
 *                     example: 2024-06-16T12:34:56.789+00:00
 *                   messages:
 *                     type: Array
 *                     example: 2024-06-16T12:34:56.789+00:00
 *                   status:
 *                     type: string
 *                     example: 2024-06-16T12:34:56.789+00:00
 * /session/findBySessionId/{id}:
 *   get:
 *     summary: Traer conversacion por id
 *     responses:
 *       200:
 *         description: Lista de sesion
 *         content:
 *           application/json:
 *             schema:
 *                 properties:
 *                   sessionId:
 *                     type: string
 *                     example: abc123
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
 * /conversations/:
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
 *               user_id:
 *                 type: string
 *                 example: 2024-06-16T12:34:56.789+00:00
 *               session_id:
 *                 type: string
 *                 example: abc123
 *               status:
 *                 type: string
 *                 example: open
 *               messages:
 *                 type: array
 *                 example: []
 *     responses:
 *       201:
 *         description: Sesión creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               chat_id:
 *                 type: string
 *                 example: xyz789
 *               user_id:
 *                 type: string
 *                 example: 2024-06-16T12:34:56.789+00:00
 *               session_id:
 *                 type: string
 *                 example: abc123
 *               status:
 *                 type: string
 *                 example: open
 *               messages:
 *                 type: array
 *                 example: []
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
 * /conversations/{id}/{sessionId}/saveMessage:
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
 *                 example: abc123
 *               user_id:
 *                 type: string
 *                 example: xyz789
 *               session_id:
 *                 type: string
 *                 example: 2024-06-16T12:34:56.789+00:00
 *               messages:
 *                 type: Array
 *                 example: 2024-06-16T12:34:56.789+00:00
 *               status:
 *                 type: string
 *                 example: 2024-06-16T12:34:56.789  
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

router.get("/", getConversations);
router.get("/findBySessionId/:id", getConversationBySessionId);
router.post("/", createConversation);
router.patch("/:id/:sessionId/saveMessage", saveMessages);
router.patch("/:id/:message_id/saveFeedback", saveFeedback);
router.get("/:id/:sessionId/messages", getMessages);

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error en conversations.js!");
});

export default router;
