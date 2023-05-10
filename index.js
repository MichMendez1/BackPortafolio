/*
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
*/

import express from "express";
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import estudianteRoutes from './routes/estudianteRoutes.js';
import Estudiante from "./models/Estudiante.js";

const app = express();
app.use(express.json());

//escanea y busca el archivo .env
dotenv.config();
conectarDB();

app.use("/api/estudiantes", estudianteRoutes);

const PORT = process.env.PORT ||4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});




/*
let users =[{
    Email:'Hola',
    Password:'Hola'
}]

//Settings
app.set('port',3000)
app.use(bodyParser.json({limit:'50mb'}))
app.use(cors())

//Rutas 

app.post('/', (req,res)=>{
    let data =req.body
    console.log(data);
    users.forEach(Usuario => {
        if(data.Email == Usuario.Email && data.Password == Usuario.Password){
            res.send(Usuario)
        }else{
            res.status(600).send('Usuario no encontrado')
        }
    });

    
})


app.listen(app.get('port'), ()=>{
    console.log(`Aplicacion funcionando en puerto ${app.get('port')}`);
})
*/