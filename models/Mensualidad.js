import mongoose from "mongoose";

const mensualidadSchema = mongoose.Schema({
    id_mensualidad:{
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

const mensualidad = mongoose.model('mensualidad', mensualidadSchema)
export default mensualidad