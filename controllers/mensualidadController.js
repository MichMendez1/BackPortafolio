import Mensualidad from "../models/Mensualidad.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {id_mensualidad} = req.body;

//Prevenir mensualidad duplicadas
const existeMensualidad = await  Mensualidad.findOne({id_mensualidad})

if (existeMensualidad){
    const error = new Error('Mensualidad ya registrada');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nueva Mensualidad
    const mensualidad = new Mensualidad(req.body);
    const mensualidadGuardado = await mensualidad.save(); 
    res.json(mensualidadGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { mensualidad } = req;
    res.json({ perfil : mensualidad });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar mensualidad con ese token 
    const mensualidadConfirmar = await Mensualidad.findOne({token})
    
    if (!mensualidadConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        mensualidadConfirmar.token = null;
        mensualidadConfirmar.confirmado = true;
        await mensualidadConfirmar.save()
        res.json({msg: "Mensualidad confirmada."})
        
    } catch (error) {
        console.log(error);
        
    }

};


const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};