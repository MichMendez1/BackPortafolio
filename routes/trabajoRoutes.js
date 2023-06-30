import express from 'express';
const router = express.Router();
import { 
    registrar
} from '../controllers/trabajoController.js';

router.post("/", registrar);

export default router;