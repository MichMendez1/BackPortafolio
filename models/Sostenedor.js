import mongoose from "mongoose";

const sostenedorSchema = mongoose.Schema({
    id_sostenedor:{
        type: String,
        require: true
    },
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
    }
})

const sostenedor = mongoose.model('sostenedor', sostenedorSchema)
export default sostenedor