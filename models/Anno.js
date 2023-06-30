import mongoose from "mongoose";

const annoSchema = mongoose.Schema({
    anno:{
        type: Date,
        require: true
    }
})

const anno = mongoose.model('anno', annoSchema)
export default anno