import Trabajo from "../models/Trabajos.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {tipo_trabajo} = req.body;

//Prevenir trabajos duplicados
const existeTrabajador = await  Trabajo.findOne({tipo_trabajo})

if (existeTrabajador){
    const error = new Error('Trabajo ya registrado');
    return res.status(400).json({msg: error.message});
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

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar trabajo con ese token 
    const trabajoConfirmar = await Trabajo.findOne({token})
    
    if (!trabajoConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        trabajoConfirmar.token = null;
        trabajoConfirmar.confirmado = true;
        await trabajoConfirmar.save()
        res.json({msg: "Trabajo confirmada."})
        
    } catch (error) {
        console.log(error);
        
    }

};


const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};