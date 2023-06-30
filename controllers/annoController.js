import Anno from "../models/Anno.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {anno} = req.body;

//Prevenir años duplicados
const existePeriodo = await  Anno.findOne({anno})

if (existePeriodo){
    const error = new Error('Año ya registrado');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuevo Año
    const anno = new Anno(req.body);
    const annoGuardado = await anno.save(); 
    res.json(annoGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { anno } = req;
    res.json({ perfil : anno });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar año con ese token 
    const periodoConfirmar = await Anno.findOne({token})
    
    if (!periodoConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        periodoConfirmar.token = null;
        periodoConfirmar.confirmado = true;
        await periodoConfirmar.save()
        res.json({msg: "Año confirmado."})
        
    } catch (error) {
        console.log(error);
    }
};

const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};