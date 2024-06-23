import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/clientController.js";

const router = express.Router();

/**
 * @swagger
 * /clients/:
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
 *                   CUIT:
 *                     type: string
 *                     example: 23333333332
 *                   Empresa:
 *                     type: string
 *                     example: Nombre Empresa
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
 * /clients/{id}/:
 *   get:
 *     summary: Traer todas las sesiones
 *     responses:
 *       200:
 *         description: Lista de sesion
 *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   CUIT:
 *                     type: string
 *                     example: 23333333332
 *                   Empresa:
 *                     type: string
 *                     example: Nombre Empresa
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
 * /clients/:
 *   post:
 *     summary: Crear una nueva sesión
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CUIT:
 *                 type: string
 *                 example: 23333333332
 *               Empresa:
 *                 type: string
 *                 example: Nombre Empresa
 *     responses:
 *       201:
 *         description: Sesión creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 CUIT:
 *                   type: string
 *                   example: 23333333332
 *                 Empresa:
 *                   type: string
 *                   example: Nombre Empresa
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
 * @swagger
 * /clients/{id}:
 *   put:
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
 *       404:
 *         description: Sesión no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sesión no encontrada
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al actualizar la sesión
 */

/**
 * @swagger
 * /clients/{id}:
 *   delete:
 *     summary: Eliminar una sesión
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la sesión a eliminar
 *     responses:
 *       200:
 *         description: Sesión eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sesión eliminada exitosamente
 *       400:
 *         description: Solicitud inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ID de sesión no válido
 *       404:
 *         description: Sesión no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sesión no encontrada
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al eliminar la sesión
 */

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
