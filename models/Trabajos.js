import mongoose from "mongoose";

const trabajoSchema = mongoose.Schema({
    tipo_trabajo:{
        type: String,
        require: true
    }
})

const trabajo = mongoose.model('trabajo', trabajoSchema)
export default trabajo