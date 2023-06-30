import express from 'express';
const router = express.Router();
import { 
    registrar
} from '../controllers/salaController.js';

router.post("/", registrar);

export default router;