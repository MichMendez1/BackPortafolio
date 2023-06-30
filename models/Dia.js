import mongoose from "mongoose";

const diaSchema = mongoose.Schema({
    id_dia:{
        type: String,
        require: true
    },
    nombre_dia:{
        type: String,
        require: true
    }
})

const dia = mongoose.model('dia', diaSchema)
export default dia