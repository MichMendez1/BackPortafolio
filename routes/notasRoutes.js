import express from 'express';
import notasCrontoller from '../controllers/notasCrontoller.js';

const router = express.Router();

router.get("/obtener-notas", notasCrontoller.obtenerNotas);
router.post("/crear-notas", notasCrontoller.crearNotas);
router.post("/actualizar-notas", notasCrontoller.actualizarNotas);

export default router