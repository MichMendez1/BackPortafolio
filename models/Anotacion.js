import mongoose from "mongoose";

const anotacionSchema = mongoose.Schema({
    anotacion:{
        type: String,
        require: true
    },
    id_alumno:{
        type: String,
        require: true
    }
})

const anotacion = mongoose.model('anotacion', anotacionSchema)
export default anotacion