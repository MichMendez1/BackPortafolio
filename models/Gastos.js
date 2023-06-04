import mongoose from "mongoose";

const gastoSchema = mongoose.Schema({
    tipo_gasto:{
        type: String,
        require: true
    },
    gastos:{
        type: Number,
        require: true
    },
    id_colegio:{
        type: String,
        require: true
    }
})

const gasto = mongoose.model('gasto', gastoSchema)
export default gasto