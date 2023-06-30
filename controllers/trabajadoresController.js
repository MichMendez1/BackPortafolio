import Trabajadores from "../models/Trabajadores.js";

const registrar =  async (req, res)=>{

console.log(req.body);
const {id_trabajadores} = req.body;

//Prevenir usuarios duplicados
const existeUsuario = await  Trabajadores.findOne({id_trabajadores})

if (existeUsuario){
    const error = new Error('Usuario ya registrado');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuevo Trabajadores
    const trabajadores = new Trabajadores(req.body);
    const trabajadoresGuardado = await trabajadores.save(); 
    res.json(trabajadoresGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { trabajadores } = req;
    res.json({ perfil : trabajadores });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar usuario con ese token 
    const usuarioConfirmar = await Trabajadores.findOne({token})
    
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


const comprobarToken=(req, res)=>{

} ;


export {registrar, perfil, confirmar ,comprobarToken};