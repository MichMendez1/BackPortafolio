import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    autenticar,
    comprobarToken,
    obtenerUsuarios,
    eliminarTrabajo,
    actualizarTrabajo
} from '../controllers/trabajoController.js';
import cheackAuth from "../middleware/authMiddleware.js";


router.post("/", registrar);
router.post("/editar/:id", actualizarTrabajo);
router.post("/login", autenticar);
router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);

router.delete("/eliminar/:id", eliminarTrabajo);


export default router;