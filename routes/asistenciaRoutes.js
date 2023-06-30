import express from 'express';
import asistenciaCrontoller from '../controllers/asistenciaCrontoller.js';

const router = express.Router();

router.post("/pasar-lista", asistenciaCrontoller.pasarLista);

export default router