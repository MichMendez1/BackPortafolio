import express from "express";
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import estudianteRoutes from './routes/estudianteRoutes.js';
import Estudiante from "./models/Estudiante.js";
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors())

//escanea y busca el archivo .env
dotenv.config();
conectarDB();

app.use("/api/estudiantes", estudianteRoutes);

const PORT = process.env.PORT ||4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
