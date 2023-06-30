import Profesor from "../models/Profesor.js";
import generarJWT from "../helpers/generarJWT.js"


const registrar =  async (req, res)=>{

console.log(req.body);
const {email} = req.body;

//Prevenir usuarios duplicados
const existeUsuario = await  Profesor.findOne({email})

if (existeUsuario){
    const error = new Error('Usuario ya registrado');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuevo Profesor
    const profesor = new Profesor(req.body);
    const profesorGuardado = await profesor.save(); 
    res.json(profesorGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { profesor } = req;
    res.json({ perfil : profesor });
};

// const confirmar = async (req, res) => {
//     const { token } = req.params;
  
//     try {
//       // Buscar usuario con ese token
//       const usuarioConfirmar = await Profesor.findOne({ token });
  
//       if (!usuarioConfirmar) {
//         const error = new Error('Token no válido');
//         return res.status(404).json({ msg: error.message });
//       }
  
//       // Actualizar confirmado = true y guardar cambios
//       usuarioConfirmar.confirmado = true;
//       usuarioConfirmar.token = null;
//       await usuarioConfirmar.save();
  
//       res.json({ msg: 'Usuario confirmado correctamente.' });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ msg: 'Error al confirmar el usuario.' });
//     }
//   };
  

const autenticar = async  (req, res)=>{
    const{ email, password } = req.body

    //Comprobar si el usuario existe 
    const usuario = await Profesor.findOne({email});
    console.log(usuario);


    if (!usuario){
        const error = new Error('El Usuario no existe');
        return res.status(404).json({msg: error.message});
    }

    // //Comprobar si el usario esta confirmado 
    // if (!usuario.confirmado){
    //     const error = new Error('Tú cuenta no ha sido confirmada');
    //     return res.status(403).json({msg: error.message});
    // }

    //Revisar el password 
    if(await usuario.comprobarPassword(password)){
        console.log('Contraseña correcta');
    
    //Autenticar
        res.json({ token: generarJWT(usuario.id) });
        const usuarioGuardado = {
          _id: usuario.id,
          nombres: usuario.nombres,
          apellidoPaterno: usuario.apellidoPaterno,
          apellidoMaterno: usuario.apellidoMaterno,
          email: usuario.email,
        };
        return res.status(200).json(usuario)
    }else {
        const error = new Error('Contraseña es incorrecta');
        return res.status(403).json({msg: error.message});
    }
   
};

const olvidePassword=(req, res)=>{

} ;

const comprobarToken=(req, res)=>{

} ;

const nuevoPassword=(req, res)=>{

} ;
const obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await Profesor.find(); // Obtiene todos los usuarios de la base de datos
      res.json(usuarios); // Envía la lista de usuarios como respuesta
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  };
  const eliminarProfesor = async (req, res) => {
    const { id } = req.params;
  
    try {
      const profesor = await Profesor.findByIdAndDelete(id);
  
      if (!profesor) {
        return res.status(404).json({ mensaje: 'Profesor no encontrado' });
      }
  
      res.json({ mensaje: 'Profesor eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar el Profesor' });
    }
  };
  const actualizarProfesor = async (req, res) => {
    const profesorId = req.params.id;
    try {
      const profesor = await Profesor.findByIdAndUpdate(profesorId, req.body, { new: true });
      res.json(profesor);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error al actualizar el profesor' });
    }
  };
  

export {registrar, perfil, autenticar, olvidePassword, comprobarToken, nuevoPassword, obtenerUsuarios,eliminarProfesor, actualizarProfesor};
