import Cursos from "../models/Cursos.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {id_curso} = req.body;

//Prevenir cursos duplicadas
const existeCurso = await  Cursos.findOne({id_curso})

if (existeCurso){
    const error = new Error('Curso ya registrada');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nueva Curso
    const curso = new Curso(req.body);
    const cursoGuardado = await curso.save(); 
    res.json(cursoGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { curso } = req;
    res.json({ perfil : curso });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar curso con ese token 
    const cursoConfirmar = await Curso.findOne({token})
    
    if (!cursoConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        cursoConfirmar.token = null;
        cursoConfirmar.confirmado = true;
        await cursoConfirmar.save()
        res.json({msg: "Curso confirmado."})
        
    } catch (error) {
        console.log(error);
        
    }

};


const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};