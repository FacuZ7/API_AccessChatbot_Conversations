import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/clientController";

const router = express.Router();

router.get("/clients", getAllItems);

router.get("/clients/:id", getItemById);

router.post("/clients", createItem);

router.put("/clients/:id", updateItem);

router.delete("/clients/:id", deleteItem);
