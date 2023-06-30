<<<<<<< HEAD
import express from 'express';
const router = express.Router();
=======
// adminRoutes.js

import express from 'express';
import Profesor from '../models/Profesor.js';
import Estudiante from '../models/Estudiante.js';
>>>>>>> a41385ce40f6b1a4527ddd199d31028ea94fae4f
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
    eliminarAsistente,
    actualizarAsistente
} from '../controllers/asistenteController.js';
import cheackAuth from "../middleware/authMiddleware.js";
<<<<<<< HEAD

=======
const router = express.Router();

// Ruta para obtener la cantidad de usuarios registrados
router.get('/usuarios', async (req, res) => {
  try {
    const totalUsuarios = await Profesor.countDocuments() + await Estudiante.countDocuments();
    const totalProfesores = await Profesor.countDocuments();
    const totalEstudiantes = await Estudiante.countDocuments();

    res.json({
      totalUsuarios,
      totalProfesores,
      totalEstudiantes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener la cantidad de usuarios' });
  }


});
>>>>>>> a41385ce40f6b1a4527ddd199d31028ea94fae4f

router.post("/", registrar);
router.post("/editar/:id", actualizarAsistente);
router.post("/login", autenticar);
<<<<<<< HEAD
router.get("/perfil", cheackAuth, perfil);
router.get('/usuarios', obtenerUsuarios);
=======
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);



router.get("/perfil", cheackAuth, perfil);
router.get('/obtenerusuarios', obtenerUsuarios);

>>>>>>> a41385ce40f6b1a4527ddd199d31028ea94fae4f

router.delete("/eliminar/:id", eliminarAsistente);


<<<<<<< HEAD
export default router;
=======

export default router;
>>>>>>> a41385ce40f6b1a4527ddd199d31028ea94fae4f
