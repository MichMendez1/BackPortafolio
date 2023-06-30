import express from "express";
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import estudianteRoutes from './routes/estudianteRoutes.js';
import asignaturaRoutes from './routes/asignaturaRoutes.js';
import trabajoRoutes from './routes/trabajoRoutes.js';
import salaRoutes from './routes/salaRoutes.js';
import diaRoutes from './routes/diaRoutes.js';
import annoRoutes from './routes/annoRoutes.js';
import sostenedorRoutes from './routes/sostenedorRoutes.js';
//import trabajadoresvariosRoutes from './routes/trabajadoresRoutes.js'


import Estudiante from "./models/Estudiante.js";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

//escanea y busca el archivo .env
dotenv.config();
conectarDB();

app.use("/api/estudiantes", estudianteRoutes);
app.use("/api/asignaturas", asignaturaRoutes);
app.use("/api/trabajos", trabajoRoutes);
app.use("/api/salas", salaRoutes);
app.use("/api/dias", diaRoutes);
app.use("/api/annos", annoRoutes);
app.use("/api/sostenedores", sostenedorRoutes);
//app.use("/api/trabajadoresvarios", trabajadoresvariosRoutes);

const PORT = process.env.PORT ||4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
