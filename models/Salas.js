import mongoose from "mongoose";

const salaSchema = mongoose.Schema({
    id_colegio:{
        type: String,
        require: true
    },
    siglas_sala:{
        type: String,
        require: true
    }
})

const sala = mongoose.model('sala', salaSchema)
export default sala