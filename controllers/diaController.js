import Dia from "../models/Dias.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {nombre_dia} = req.body;

//Prevenir dias duplicados
const existeDia = await  Dia.findOne({nombre_dia})

if (existeDia){
    const error = new Error('Dia ya registrado');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuevo dia
    const dia = new Dia(req.body);
    const diaGuardado = await dia.save(); 
    res.json(diaGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { dia } = req;
    res.json({ perfil : dia });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar dia con ese token 
    const diaConfirmar = await Dia.findOne({token})
    
    if (!diaConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        diaConfirmar.token = null;
        diaConfirmar.confirmado = true;
        await diaConfirmar.save()
        res.json({msg: "Dia confirmado."})
        
    } catch (error) {
        console.log(error);
        
    }

};

const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};