import express from 'express';
import cursosCrontoller from '../controllers/cursosCrontoller.js';

const router = express.Router();

router.get("/cursos", cursosCrontoller.obtenerCursos);

export default router