import mongoose from "mongoose";

const bloqueSchema = mongoose.Schema({
    id_bloque:{
        type: String,
        require: true
    },
    nombre:{
        type: String,
        require: true
    },
    id_asignatura:{
        type: String,
        require: true
    },
    id_dia:{
        type: String,
        require: true
    },
    id_curso:{
        type: String,
        require: true
    },
    hora_inicio:{
        type: String,
        require: true
    },
    hora_termino:{
        type: String,
        require: true
    }
})

const bloque = mongoose.model('bloque', bloqueSchema)
export default bloque