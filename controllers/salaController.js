import Sala from "../models/Salas.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {id_sala} = req.body;

//Prevenir Salas duplicados
const existeSala = await  Sala.findOne({id_sala})

if (existeSala){
    const error = new Error('Sala ya registrado');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuev Sala
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

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar usuario con ese token 
    const salaConfirmar = await Sala.findOne({token})
    
    if (!salaConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        salaConfirmar.token = null;
        salaConfirmar.confirmado = true;
        await salaConfirmar.save()
        res.json({msg: "Sala confirmada."})
        
    } catch (error) {
        console.log(error);
        
    }

};


const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};