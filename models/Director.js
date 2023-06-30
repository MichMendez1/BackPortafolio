import mongoose  from "mongoose";
import bcrypt from 'bcrypt';
import generarId from "../helpers/generarId.js";


const directorSchema = mongoose.Schema({
    directorID: {
        type: String,
        required: false,
        trim: true,
    },
    cursoID: {
        type: String,
        required: false,
        trim: true,
    },
    nombres: {
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
    fecha_nacimiento: {
        type: Date,
        required: true,
        
    },
    nacionalidad: {
        type: String,
        required: false,
        trim: true,
        
    },
    direccion: {
        type: String,
        required: false,
        trim: false,
        
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
        trim: true,
    },
    rut: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    telefono: {
        type: String,
        default: null,
        trim: true,
    },
    asignatura:{
        type: String,
        

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
directorSchema.pre('save', async function(next){

    //Prevenir que lo vuelva a hashear
    if (!this.isModified('password')){
        next()
    };
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});

//Confirmar si la clave coincide
directorSchema.methods.comprobarPassword = async function (passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password)
};

const Director = mongoose.model("Directores",directorSchema);
export default Director;
