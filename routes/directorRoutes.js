import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    autenticar,
    comprobarToken,
    obtenerUsuarios,
    eliminarDirector,
    actualizarDirector
} from '../controllers/directorController.js';
import cheackAuth from "../middleware/authMiddleware.js";


router.post("/", registrar);
router.post("/editar/:id", actualizarDirector);
router.post("/login", autenticar);
router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);

router.delete("/eliminar/:id", eliminarDirector);


export default router;