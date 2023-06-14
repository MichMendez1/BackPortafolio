import mongoose from "mongoose";

const diaSchema = mongoose.Schema({
    nombre_dia:{
        type: String,
        require: true
    }
})

const dia = mongoose.model('dia', diaSchema)
export default dia