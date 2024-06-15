import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dbConnect from "./config/mongoDB.js";
import routerMaster from "./routes/index.js";
import { saveInactiveConversations } from "./controllers/conversations.js";

const app = express();
dotenv.config();

//Importante el CORS PRIMERO este es el orden correcto.
app.use(cors());
app.use(express.json()); //esta linea permite recibir mediante los body, información en formato JSON
app.use(routerMaster);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

dbConnect();

// Ejecuta saveInactiveConversations cada 30 minutos
setInterval(saveInactiveConversations, 30 * 60 * 1000);

const router = express.Router();

router.get("/conversations", getAllItems);
router.get("/conversations/:id", getItemById);
router.post("/conversations", createItem);
router.put("/conversations/:id", updateItem);
router.delete("/conversations/:id", deleteItem);

export default router;
