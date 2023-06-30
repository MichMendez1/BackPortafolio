import mongoose from "mongoose";

const asistenciaSchema = mongoose.Schema({
    fecha:{
        type: Date,
        require: true
    },
    id_alumno:{
        type: String,
        require: true
    },
    estado:{
        type: String,
        require: true
    }
})

const asistencia = mongoose.model('asistencia', asistenciaSchema)
export default asistencia