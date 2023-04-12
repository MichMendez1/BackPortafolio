const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

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
    console.log(`Aplicacion funcionando en puerto: ${app.get('port')}`);
})
