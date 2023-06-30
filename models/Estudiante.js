import mongoose  from "mongoose";
import bcrypt from 'bcrypt';
import generarId from "../helpers/generarId.js";


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
        default: generarId(),

    },

    confirmado:{
        type: Boolean,
        default: false
    }
});

//Hashear clave
estudianteSchema.pre('save', async function(next){

    //Prevenir que lo vuelva a hashear
    if (!this.isModified('password')){
        next()
    };
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});

//Confirmar si la clave coincide
estudianteSchema.methods.comprobarPassword = async function (passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password)
}

const Estudiante = mongoose.model("Estudiante", estudianteSchema);
export default Estudiante;
