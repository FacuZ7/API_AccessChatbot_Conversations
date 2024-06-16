import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  handleEndOfConversation,
  saveInactiveConversations,
} from "../controllers/conversationController.js";

const router = express.Router();

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
router.post("/end-conversation", handleEndOfConversation);

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error en conversations.js!");
});

setInterval(saveInactiveConversations, 30 * 60 * 1000);

export default router;
