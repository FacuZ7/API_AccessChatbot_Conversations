import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dbConnect from "./config/mongoDB.js";
import routerMaster from "./routes/routerMaster.js";

const app = express();
dotenv.config();

//Importante el CORS PRIMERO este es el orden correcto.
app.use(cors());
app.use(express.json()); //esta linea permite recibir mediante los body, información en formato JSON
app.use("/", routerMaster);

const port = process.env.PORT;

dbConnect();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

const router = express.Router();

export default router;
