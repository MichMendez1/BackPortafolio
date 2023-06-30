import mongoose  from "mongoose";
import bcrypt from 'bcrypt';
import generarId from "../helpers/generarId.js";


const asistenteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido_paterno: {
        type: String,
        required: true,
        trim: true,
    },
    apellido_materno: {
        type: String,
        required: false,
        trim: true,
    },
    rut: {
        type: String,
        required: true,
        unique: true,
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

   
    telefono: {
        type: String,
        default: null,
        trim: true,
    },
    tipo: {
        type: String,
        required: true,
        trim: true,
    },
    token:{
        type: String,
        default: generarId(),

    }
});

//Hashear clave
asistenteSchema.pre('save', async function(next){

    //Prevenir que lo vuelva a hashear
    if (!this.isModified('password')){
        next()
    };
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});

//Confirmar si la clave coincide
asistenteSchema.methods.comprobarPassword = async function (passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password)
};

const Asistente = mongoose.model("Asistentes",asistenteSchema);
export default Asistente;
