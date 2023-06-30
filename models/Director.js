import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import generarId from "../helpers/generarId.js";

const directorSchema = mongoose.Schema({
    id_director:{
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
    },
    id_colegio:{
        type: String,
        require: true
    }
})

const director = mongoose.model('director', directorSchema)
export default director