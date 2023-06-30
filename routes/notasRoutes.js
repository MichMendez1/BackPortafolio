import express from 'express';
import notasCrontoller from '../controllers/notasCrontoller.js';

const router = express.Router();

router.get("/obtener-notas", notasCrontoller.obtenerNotas);
router.post("/crear-notas", notasCrontoller.crearNotas);
router.post("/actualizar-notas", notasCrontoller.actualizarNotas);
router.get("/traer-nota", notasCrontoller.obtenerUnaNotas);


export default router