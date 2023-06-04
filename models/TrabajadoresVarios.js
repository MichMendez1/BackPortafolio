import mongoose from "mongoose";

const trabajadoresSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    ap_paterno:{
        type: String,
        require: true
    },
    ap_materno:{
        type: String,
        require: true
    },
    rut:{
        type: Number,
        require: true
    },
    direccion:{
        type: String,
        require: true
    },
    telofono:{
        type: Number,
        require: true
    },
    correo:{
        type: String,
        require: true
    },
    id_colegio:{
        type: String,
        require: true
    },
    id_trabajo:{
        type: String,
        require: true
    }
})

const trabajadores = mongoose.model('trabajadores', trabajadoresSchema)
export default trabajadores