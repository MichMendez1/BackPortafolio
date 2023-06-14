import mongoose from "mongoose";

const alumnoSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    ap_paterno:{
        type: String,
        require: true
    },
    ap_materno:{
        type: String,
        require: true
    },
    rut:{
        type: Number,
        require: true
    },
    direccion:{
        type: String,
        require: true
    },
    telofono:{
        type: Number,
        require: true
    },
    correo:{
        type: String,
        require: true
    },
    id_curso:{
        type: String,
        require: true
    }
})

const alumno = mongoose.model('alumno', alumnoSchema)
export default alumno