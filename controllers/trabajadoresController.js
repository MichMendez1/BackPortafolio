import Trabajadores from "../models/Trabajadores.js";

const registrar =  async (req, res)=>{

console.log(req.body);
const {id_trabajador} = req.body;

//Prevenir usuarios duplicados
const existeUsuario = await  Trabajador.findOne({id_trabajador})

if (existeUsuario){
    const error = new Error('Usuario ya registrado');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuevo Trabajador
    const trabajador = new Trabajador(req.body);
    const trabajadorGuardado = await trabajador.save(); 
    res.json(trabajadorGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { trabajador } = req;
    res.json({ perfil : trabajador });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar usuario con ese token 
    const usuarioConfirmar = await Trabajador.findOne({token})
    
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