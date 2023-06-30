import Profesor from "../models/Profesor.js";

const registrar = async (req, res)=>{

    try {
        
    } catch (error) {
        
    }

};

const perfil = (req, res)=>{
    const { Profesor } = req;
    res.json({ perfil: profesor});

};


export {registrar, perfil};