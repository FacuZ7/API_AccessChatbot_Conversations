import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dbConnect from "./config/mongoDB.js";
import routerMaster from "./routes/routerMaster.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
dotenv.config();

// Configuración de opciones para swagger-jsdoc
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API',
      version: '1.0.0',
      description: 'Documentación de mi API',
    },
    servers: [
      {
        url: 'http://localhost:8080', // URL base de tu API
      },
    ],
  },
  apis: ['./routes/*.js'], // Rutas donde están tus archivos de rutas
};

const swaggerSpec = swaggerJsdoc(options);

// Ruta para servir la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
