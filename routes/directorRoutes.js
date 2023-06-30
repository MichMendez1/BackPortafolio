import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    obtenerUsuarios,
    eliminarDirector,
    actualizarDirector
} from '../controllers/directorController.js';
import cheackAuth from "../middleware/authMiddleware.js";


router.post("/", registrar);
router.post("/editar/:id", actualizarDirector);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);



router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);


router.delete("/eliminar/:id", eliminarDirector);


export default router;