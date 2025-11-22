import express from "express";
// import { loadEnvFile } from "node:process";
import todosRoutes from "./routes/todos.routes";
import {userRouter} from "./routes/users.router";
//importar cors
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import dotenv  from 'dotenv'

dotenv.config()

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://midominio.app',
    'https://midominio.app.prueba'
  ],//dominio del cual se aceptan peticiones (el frontend )
  methods: ['GET','POST','PUT','DELETE','OPTIONS'], //metodos permitidos
})) // middleware para habilitar CORS
app.use(express.json())// middleware, parsea el body de las peticiones a JSON

app.get("/", (req, res) => {
  res.send("TODO APP API");
});

// un middleware para definir las rutas
app.use("/todos", todosRoutes);
app.use("/users",userRouter);

app.use(errorHandler) // middleware propio para manejar errores

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
