import mongoose from "mongoose";

const asignaturaSchema = mongoose.Schema({
    asignatura:{
        type: String,
        require: true
    }
})

const asignatura = mongoose.model('asignatura', asignaturaSchema)
export default asignatura