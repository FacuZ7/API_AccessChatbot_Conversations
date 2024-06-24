import express from "express";
import {
    createVector,
    getVector
 } from "../controllers/vectorController.js";

const router = express.Router();


/**
 * @swagger
 * /create-vector/:
 *   post:
 *     summary: Crear un nuevo vector
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vector_id:
 *                 type: string
 *                 example: 6677bf92dbf8dd2985572b82
 *               filename:
 *                 type: string
 *                 example: 4_Por_que_un_usuario_no_puede_acceder_a_una_pagina.txt
 *               realted_vector_id:
 *                 type: Array
 *                 example: ["2d502f38-b966-4fb5-aab9-63e767145f5b", "0facb752-bf98-4eb0-a595-dbe27e991fee", "9833affd-a635-4c10-8760-5a72474a6a2c"]
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 vector_id:
 *                   type: string
 *                   example: 6677bf92dbf8dd2985572b82
 *                 filename:
 *                   type: string
 *                   example: 4_Por_que_un_usuario_no_puede_acceder_a_una_pagina
 *                 realted_vector_id:
 *                   type: Array
 *                   example: ["2d502f38-b966-4fb5-aab9-63e767145f5b", "0facb752-bf98-4eb0-a595-dbe27e991fee", "9833affd-a635-4c10-8760-5a72474a6a2c"]
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



router.get("/", getVector);
router.post("/", createVector);

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error en conversations.js!");
});

export default router;
