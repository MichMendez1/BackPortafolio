import mongoose from "mongoose";

const apoderadoSchema = mongoose.Schema({
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
    id_alumno:{
        type: String,
        require: true
    }
})

const apoderado = mongoose.model('apoderado', apoderadoSchema)
export default apoderado