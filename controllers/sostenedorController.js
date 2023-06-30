import Sostenedor from "../models/Sostenedor.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {nombre} = req.body;

//Prevenir sostenedores duplicados
const existeSostenedor = await  Sostenedor.findOne({nombre})

if (existeSostenedor){
    const error = new Error('Usuario ya registrado');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nuevo sostenedor
    const sostenedor = new Sostenedor(req.body);
    const sostenedorGuardado = await sostenedor.save(); 
    res.json(sostenedorGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { sostenedor } = req;
    res.json({ perfil : sostenedor });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar sostenedor con ese token 
    const sostenedorConfirmar = await Sostenedor.findOne({token})
    
    if (!sostenedorConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        sostenedorConfirmar.token = null;
        sostenedorConfirmar.confirmado = true;
        await sostenedorConfirmar.save()
        res.json({msg: "Sostenedor confirmado."})
        
    } catch (error) {
        console.log(error);
        
    }
};

const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};