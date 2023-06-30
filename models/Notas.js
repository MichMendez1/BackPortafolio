import mongoose from "mongoose";

const notaSchema = mongoose.Schema({
    id_alumno:{
        type: String,
        require: true
    },
    id_asignatura:{
        type: String,
        require: true
    },
    nombre_nota:{
        type: String,
        require: true
    },
    nota:{
        type: Number,
        require: true
    }
})

const nota = mongoose.model('nota', notaSchema)
export default nota