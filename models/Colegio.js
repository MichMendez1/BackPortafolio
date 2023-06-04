import mongoose from "mongoose";

const colegioSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    id_sostenedor:{
        type: String,
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

const colegio = mongoose.model('colegio', colegioSchema)
export default colegio