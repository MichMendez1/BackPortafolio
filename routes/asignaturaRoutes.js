import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    confirmar, 
} from '../controllers/asignaturaController.js';
import cheackAuth from "../middleware/authMiddleware.js";


router.post("/", registrar);
router.post("/confirmar/:token", confirmar);

router.get("/perfil", cheackAuth, perfil);

export default router;