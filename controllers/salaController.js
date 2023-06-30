import Sala from "../models/Salas.js";
import generarJWT from "../helpers/generarJWT.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {id_sala} = req.body;

//Prevenir usuarios duplicados
const existeUsuario = await  Sala.findOne({id_sala})

if (existeUsuario){
    const error = new Error('Usuario ya registrado');
    return res.status(400).json({ errors: [{ msg: error.message }] });
}
try {
    //Guardar nuevo Sala
    const sala = new Sala(req.body);
    const salaGuardado = await sala.save(); 
    res.json(salaGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { sala } = req;
    res.json({ perfil : sala });
};

// const confirmar = async (req, res) => {
//     const { token } = req.params;
  
//     try {
//       // Buscar usuario con ese token
//       const usuarioConfirmar = await Sala.findOne({ token });
  
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
    const{ id_sala, password } = req.body

    //Comprobar si el usuario existe 
    const usuario = await Sala.findOne({id_sala});
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
          id_sala: usuario.id_sala,
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
      const usuarios = await Sala.find(); // Obtiene todos los usuarios de la base de datos
      res.json(usuarios); // Envía la lista de usuarios como respuesta
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  };
  const eliminarSala = async (req, res) => {
    const { id } = req.params;
  
    try {
      const sala = await Sala.findByIdAndDelete(id);
  
      if (!sala) {
        return res.status(404).json({ mensaje: 'Sala no encontrado' });
      }
  
      res.json({ mensaje: 'Sala eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar el sala' });
    }
  };
  const actualizarSala = async (req, res) => {
    const salaId = req.params.id;
    try {
      const sala = await Sala.findByIdAndUpdate(salaId, req.body, { new: true });
      res.json(sala);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error al actualizar el sala' });
    }
  };
  

export {registrar, perfil, autenticar, comprobarToken, obtenerUsuarios,eliminarSala, actualizarSala};