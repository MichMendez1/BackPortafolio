import Trabajo from "../models/Trabajos.js";
import generarJWT from "../helpers/generarJWT.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {email} = req.body;

//Prevenir usuarios duplicados
const existeUsuario = await  Trabajo.findOne({email})

if (existeUsuario){
    const error = new Error('Usuario ya registrado');
    return res.status(400).json({ errors: [{ msg: error.message }] });
}
try {
    //Guardar nuevo Trabajo
    const trabajo = new Trabajo(req.body);
    const trabajoGuardado = await trabajo.save(); 
    res.json(trabajoGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { trabajo } = req;
    res.json({ perfil : trabajo });
};

// const confirmar = async (req, res) => {
//     const { token } = req.params;
  
//     try {
//       // Buscar usuario con ese token
//       const usuarioConfirmar = await Trabajo.findOne({ token });
  
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
    const usuario = await Trabajo.findOne({email});
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
        return res.status(200).json(usuario)
    
    //Autenticar
        res.json({ token: generarJWT(usuario.id) });
        const usuarioGuardado = {
          _id: usuario.id,
          nombres: usuario.nombres,
          apellidoPaterno: usuario.apellidoPaterno,
          apellidoMaterno: usuario.apellidoMaterno,
          email: usuario.email,
        };
        
    }
    else {
        const error = new Error('Contraseña es incorrecta');
        return res.status(403).json({msg: error.message});
    }
    
   
};



const comprobarToken=(req, res)=>{

} ;


const obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await Trabajo.find(); // Obtiene todos los usuarios de la base de datos
      res.json(usuarios); // Envía la lista de usuarios como respuesta
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  };
  const eliminarTrabajo = async (req, res) => {
    const { id } = req.params;
  
    try {
      const trabajo = await Trabajo.findByIdAndDelete(id);
  
      if (!trabajo) {
        return res.status(404).json({ mensaje: 'Trabajo no encontrado' });
      }
  
      res.json({ mensaje: 'Trabajo eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar el trabajo' });
    }
  };
  const actualizarTrabajo = async (req, res) => {
    const trabajoId = req.params.id;
    try {
      const trabajo = await Trabajo.findByIdAndUpdate(trabajoId, req.body, { new: true });
      res.json(trabajo);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error al actualizar el trabajo' });
    }
  };
  

export {registrar, perfil, autenticar, comprobarToken, obtenerUsuarios,eliminarTrabajo, actualizarTrabajo};