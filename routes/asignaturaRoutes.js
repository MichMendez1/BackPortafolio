import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    autenticar,
    comprobarToken,
    obtenerUsuarios,
    eliminarAsignatura,
    actualizarAsignatura
} from '../controllers/asignaturaController.js';
import cheackAuth from "../middleware/authMiddleware.js";


router.post("/", registrar);
router.post("/editar/:id", actualizarAsignatura);
router.post("/login", autenticar);
router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);

router.delete("/eliminar/:id", eliminarAsignatura);


export default router;