import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    confirmar, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    obtenerUsuarios
} from '../controllers/estudianteController.js';
import cheackAuth from "../middleware/authMiddleware.js";


router.post("/", registrar);
router.post("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);



router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);


export default router;