import mongoose from "mongoose";

const cursoSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    id_sala:{
        type: String,
        require: true
    },
    id_colegio:{
        type: String,
        require: true
    },
    id_anno:{
        type: String,
        require: true
    },
    id_bloque:{
        type: Number,
        require: true
    }
})

const curso = mongoose.model('curso', cursoSchema)
export default curso