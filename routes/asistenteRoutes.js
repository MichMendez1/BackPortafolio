// adminRoutes.js

import express from 'express';
import Profesor from '../models/Profesor.js';
import Estudiante from '../models/Estudiante.js';
import { 
    registrar, 
    perfil, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    obtenerUsuarios,
    eliminarAsistente,
    actualizarAsistente
} from '../controllers/asistenteController.js';
import cheackAuth from "../middleware/authMiddleware.js";
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

router.post("/", registrar);
router.post("/editar/:id", actualizarAsistente);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);



router.get("/perfil", cheackAuth, perfil);
router.get('/obtenerusuarios', obtenerUsuarios);


router.delete("/eliminar/:id", eliminarAsistente);



export default router;
