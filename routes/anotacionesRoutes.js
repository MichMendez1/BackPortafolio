import express from 'express';
import anotacionCrontoller from '../controllers/anotacionesCrontoller.js';

const router = express.Router();

router.get("/anotaciones", anotacionCrontoller.obtenerAnotaciones);
router.get("/traer-anotacion", anotacionCrontoller.obtenerUnaAnotaciones);
router.post("/crear-anotacion", anotacionCrontoller.crearAnotacion);
router.post("/eliminar-anotacion", anotacionCrontoller.eliminarAnotacion);

export default router