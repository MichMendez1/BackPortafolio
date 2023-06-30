import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil
} from '../controllers/trabajadoresController.js';


router.post("/", registrar);



router.get("/perfil", cheackAuth, perfil);

export default router;