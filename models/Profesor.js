import mongoose  from "mongoose";
import bcrypt from 'bcrypt';
import generarId from "../helpers/generarId.js";


const profesorSchema = mongoose.Schema({
    id_profesor:{
        type: String,
        require: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    ap_paterno:{
        type: String,
        require: true
    },
    ap_materno:{
        type: String,
        require: true
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

    token:{
        type: String,
        default: generarId(),
    },

    confirmado:{
        type: Boolean,
        default: false
    },

    curso:{
        type:String,
    },
});

//Hashear clave
profesorSchema.pre('save', async function(next){

    //Prevenir que lo vuelva a hashear
    if (!this.isModified('password')){
        next()
    };
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});

//Confirmar si la clave coincide
profesorSchema.methods.comprobarPassword = async function (passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password)
};

const Profesor = mongoose.model("Profesor",profesorSchema);
export default Profesor;
