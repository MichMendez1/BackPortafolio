import Asistente from "../models/Asistente.js";
import generarJWT from "../helpers/generarJWT.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {email} = req.body;

//Prevenir usuarios duplicados
const existeUsuario = await  Asistente.findOne({email})

if (existeUsuario){
    const error = new Error('Usuario ya registrado');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuevo Asistente
    const asistente = new Asistente(req.body);
    const asistenteGuardado = await asistente.save(); 
    res.json(asistenteGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { asistente } = req;
    res.json({ perfil : asistente });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar usuario con ese token 
    const usuarioConfirmar = await Asistente.findOne({token})
    
    if (!usuarioConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save()
        res.json({msg: "Usuario confirmado correctamente."})
        
    } catch (error) {
        console.log(error);
        
    }

};

const autenticar = async  (req, res)=>{
    const{ email, password } = req.body

    //Comprobar si el usuario existe 
    const usuario = await Asistente.findOne({email});

    if (!usuario){
        const error = new Error('El Usuario no existe');
        return res.status(404).json({msg: error.message});
    }

    //Comprobar si el usario esta confirmado 
    if (!usuario.confirmado){
        const error = new Error('Tú cuenta no ha sido confirmada');
        return res.status(403).json({msg: error.message});
    }

    //Revisar el password 
    if(await usuario.comprobarPassword(password)){
        console.log('Password correcto');
    
    //Autenticar
        res.json({ token: generarJWT(usuario.id) });
    }else {
        const error = new Error('Password es incorrecto');
        return res.status(403).json({msg: error.message});
    }
   
};

const olvidePassword=(req, res)=>{

} ;

const comprobarToken=(req, res)=>{

} ;

const nuevoPassword=(req, res)=>{

} ;

export {registrar, perfil, confirmar , autenticar, olvidePassword, comprobarToken, nuevoPassword};