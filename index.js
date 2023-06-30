import express from "express";
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import annoRoutes from './routes/annoRoutes.js';
import asignaturaRoutes from './routes/asignaturaRoutes.js';
import bloqueRoutes from './routes/bloqueRoutes.js';
import colegioRoutes from './routes/colegioRoutes.js';
import cursoRoutes from './routes/cursoRoutes.js';
import diaRoutes from './routes/diaRoutes.js';
import directorRoutes from './routes/directorRoutes.js';
import matriculaRoutes from './routes/matriculaRoutes.js';
import mensualidadRoutes from './routes/mensualidadRoutes.js';
import profesorRoutes from './routes/profesorRoutes.js';
import salaRoutes from './routes/salaRoutes.js';
import sostenedorRoutes from './routes/sostenedorRoutes.js';
import estudianteRoutes from './routes/estudianteRoutes.js';
import trabajoRoutes from './routes/trabajoRoutes.js';
import trabajadoresRoutes from './routes/trabajadoresRoutes.js';
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
app.use("/api/asignaturas", asignaturaRoutes);
app.use("/api/trabajos", trabajoRoutes);
app.use("/api/salas", salaRoutes);
app.use("/api/dias", diaRoutes);
app.use("/api/annos", annoRoutes);
app.use("/api/sostenedores", sostenedorRoutes);
app.use("/api/bloques", bloqueRoutes);
app.use("/api/colegios", colegioRoutes);
app.use("/api/cursos", cursoRoutes);
app.use("/api/directores", directorRoutes);
app.use("/api/matriculas", matriculaRoutes);
app.use("/api/mensualidades", mensualidadRoutes);
app.use("/api/profesores", profesorRoutes);
app.use("/api/trabajadores", trabajadoresRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/asistencia", asistenciaRoutes);
app.use("/api/anotaciones", anotacionesRoutes);
app.use("/api/notas", notasRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
