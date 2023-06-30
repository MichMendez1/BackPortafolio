import Colegio from "../models/Colegio.js";

const registrar =  async (req, res)=>{

console.log(req.body);
const {direccion} = req.body;

//Prevenir colegios duplicados
const existeEstablecimiento = await  Colegio.findOne({direccion})

if (existeEstablecimiento){
    const error = new Error('Usuario ya registrado');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuevo colegio
    const colegio = new Colegio(req.body);
    const colegioGuardado = await colegio.save(); 
    res.json(colegioGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { colegio } = req;
    res.json({ perfil : colegio });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar colegio con ese token 
    const colegioConfirmar = await Colegio.findOne({token})
    
    if (!colegioConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        colegioConfirmar.token = null;
        colegioConfirmar.confirmado = true;
        await colegioConfirmar.save()
        res.json({msg: "Usuario confirmado correctamente."})
        
    } catch (error) {
        console.log(error);
        
    }

};

const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};