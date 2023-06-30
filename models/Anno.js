import mongoose from "mongoose";

const annoSchema = mongoose.Schema({
    id_anno:{
        type: String,
        require: true
    },
    anno:{
        type: Date,
        require: true
    }
})

const anno = mongoose.model('anno', annoSchema)
export default anno