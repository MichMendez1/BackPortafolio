import Bloque from "../models/Bloque.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {id_bloque} = req.body;

//Prevenir bloques duplicadas
const existeBloque = await  Bloque.findOne({id_bloque})

if (existeBloque){
    const error = new Error('Bloque ya registrada');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuevo Bloque
    const bloque = new Bloque(req.body);
    const bloqueGuardado = await bloque.save(); 
    res.json(bloqueGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { bloque } = req;
    res.json({ perfil : bloque });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar bloque con ese token 
    const bloqueConfirmar = await Bloque.findOne({token})
    
    if (!bloqueConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        bloqueConfirmar.token = null;
        bloqueConfirmar.confirmado = true;
        await bloqueConfirmar.save()
        res.json({msg: "Bloque confirmada."})
        
    } catch (error) {
        console.log(error);
        
    }

};


const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};