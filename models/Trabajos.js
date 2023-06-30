import mongoose from "mongoose";
import generarId from "../helpers/generarId.js";

const trabajoSchema = mongoose.Schema({
    id_trabajo:{
        type: String,
        require: true
    },
    tipo_trabajo:{
        type: String,
        require: true
    },
    token:{
        type: String,
        default: generarId(),

    }
})

const trabajo = mongoose.model('trabajo', trabajoSchema)
export default trabajo