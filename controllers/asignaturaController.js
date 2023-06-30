import Asignatura from "../models/Asignatura.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {id_asignatura} = req.body;

//Prevenir asignaturas duplicadas
const existeRamo = await  Asignatura.findOne({id_asignatura})

if (existeRamo){
    const error = new Error('Asignatura ya registrada');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nueva Asignatura
    const asignatura = new Asignatura(req.body);
    const asignaturaGuardado = await asignatura.save(); 
    res.json(asignaturaGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { asignatura } = req;
    res.json({ perfil : asignatura });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar ramo con ese token 
    const ramoConfirmar = await Asignatura.findOne({token})
    
    if (!ramoConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        ramoConfirmar.token = null;
        ramoConfirmar.confirmado = true;
        await ramoConfirmar.save()
        res.json({msg: "Asignatura confirmada."})
        
    } catch (error) {
        console.log(error);
        
    }

};


const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};