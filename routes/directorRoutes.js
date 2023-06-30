import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    autenticar,
<<<<<<< HEAD
    comprobarToken,
=======
    olvidePassword,
    comprobarToken,
    nuevoPassword,
>>>>>>> a41385ce40f6b1a4527ddd199d31028ea94fae4f
    obtenerUsuarios,
    eliminarDirector,
    actualizarDirector
} from '../controllers/directorController.js';
import cheackAuth from "../middleware/authMiddleware.js";


router.post("/", registrar);
router.post("/editar/:id", actualizarDirector);
router.post("/login", autenticar);
<<<<<<< HEAD
router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);

=======
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);



router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);


>>>>>>> a41385ce40f6b1a4527ddd199d31028ea94fae4f
router.delete("/eliminar/:id", eliminarDirector);


export default router;