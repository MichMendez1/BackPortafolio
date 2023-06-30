import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    autenticar,
    comprobarToken,
    obtenerUsuarios,
    eliminarSala,
    actualizarSala
} from '../controllers/salaController.js';
import cheackAuth from "../middleware/authMiddleware.js";


router.post("/", registrar);
router.post("/editar/:id", actualizarSala);
router.post("/login", autenticar);
router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);

router.delete("/eliminar/:id", eliminarSala);


export default router;