import mongoose, { mongo } from "mongoose";

const estudianteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },

    rut: {
        type: String,
        required: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },

    telfono: {
        type: String,
        default: null,
        trim: true,
    },
    emailPropio: {
        type: String,
        default: null,
        trim: true,
    },
    token:{
        type: String,

    },

    confirmado:{
        type: Boolean,
        default: false
    }

});

const Estudiante = mongoose.model("Estudiante", estudianteSchema);
export default Estudiante;
