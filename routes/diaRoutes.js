import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    autenticar,
    comprobarToken,
    obtenerUsuarios,
    eliminarDia,
    actualizarDia
} from '../controllers/diaController.js';
import cheackAuth from "../middleware/authMiddleware.js";


router.post("/", registrar);
router.post("/editar/:id", actualizarDia);
router.post("/login", autenticar);
router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);

router.delete("/eliminar/:id", eliminarDia);


export default router;