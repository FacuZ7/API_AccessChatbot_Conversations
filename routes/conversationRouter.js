import express from "express";
import {
  getConversations, getConversationBySessionId, createConversation, saveMessages, saveFeedback, getMessages,
} from "../controllers/conversationController.js";

const router = express.Router();

router.get("/", getConversations)
router.get("/findBySessionId/:id", getConversationBySessionId)
router.post("/", createConversation)
router.patch("/:id/:sessionId/saveMessage", saveMessages)
router.patch("/:id/:message_id/saveFeedback", saveFeedback)
router.get("/:id/:sessionId/messages", getMessages)

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error en conversations.js!");
});

setInterval(saveInactiveConversations, 30 * 60 * 1000);

export default router;
