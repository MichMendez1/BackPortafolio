import mongoose from "mongoose";

const asignaturaSchema = mongoose.Schema({
    id_asignatura:{
        type: String,
        require: true
    },
    nombre:{
        type: String,
        require: true
    },
    id_Profesor:{
        type: String,
        require: true
    }
})

const Asignatura = mongoose.model('Asignatura', asignaturaSchema)
export default Asignatura;