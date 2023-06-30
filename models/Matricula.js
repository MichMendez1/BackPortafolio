import mongoose from "mongoose";

const matriculaSchema = mongoose.Schema({
    id_matricula:{
        type: String,
        require: true
    },
    id_alumno:{
        type: String,
        require: true
    },
    monto:{
        type: Number,
        require: true
    },
    estado:{
        type: String,
        require: true
    }
})

const matricula = mongoose.model('matricula', matriculaSchema)
export default matricula