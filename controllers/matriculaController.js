import Matricula from "../models/Matricula.js"

const registrar =  async (req, res)=>{

console.log(req.body);
const {id_matricula} = req.body;

//Prevenir matriculas duplicadas
const existeRamo = await  Matricula.findOne({id_matricula})

if (existeRamo){
    const error = new Error('Matricula ya registrada');
    return res.status(400).json({msg: error.message});
}
try {
    //Guardar nueva Matricula
    const matricula = new Matricula(req.body);
    const matriculaGuardado = await matricula.save(); 
    res.json(matriculaGuardado);

} catch (error) {
    console.log(error);    
    }
  
};

const perfil = (req, res)=>{
    const { matricula } = req;
    res.json({ perfil : matricula });
};

const confirmar = async (req,res)=>{
    const { token } = req.params;

    //Buscar matricula con ese token 
    const matriculaConfirmar = await Matricula.findOne({token})
    
    if (!matriculaConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        // Despues de buscar se modifica confirmado = true  y almacena 
        matriculaConfirmar.token = null;
        matriculaConfirmar.confirmado = true;
        await matriculaConfirmar.save()
        res.json({msg: "Matricula confirmada."})
        
    } catch (error) {
        console.log(error);
        
    }

};


const comprobarToken=(req, res)=>{

} ;

export {registrar, perfil, confirmar , comprobarToken};