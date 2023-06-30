import express from "express";
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import estudianteRoutes from './routes/estudianteRoutes.js';
import cursosRoutes from './routes/cursosRoutes.js';
import anotacionesRoutes from './routes/anotacionesRoutes.js';
import asistenciaRoutes from './routes/asistenciaRoutes.js';
import notasRoutes from './routes/notasRoutes.js';
import Estudiante from "./models/Estudiante.js";
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors())

//escanea y busca el archivo .env   
dotenv.config();
conectarDB();

app.use("/api/estudiantes", estudianteRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/asistencia", asistenciaRoutes);
app.use("/api/anotaciones", anotacionesRoutes);
app.use("/api/notas", notasRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
