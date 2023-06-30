import anotacionSchema from "../models/Anotacion.js";

const anotacionCrontoller = {
    obtenerAnotaciones:  async (req, res) => {
        await anotacionSchema
        .find()
        .then(data => res.json(data))
        .catch(error => console.log(error))
    },
    obtenerUnaAnotaciones:  async (req, res) => {
        const id = req.params.id
        await anotacionSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => console.log(error))
    },
    obtenerAnotacionesFiltradas:  async (req, res) => {
        const {id} = req.body
        await anotacionSchema
        .find({id_alumno:id})
        .then(data => res.json({data}))
        .catch(error => console.log(error))
    },
    crearAnotacion: async (req, res) => {
        const anotacion = new anotacionSchema(req.body)
        await anotacion
        .save()
        .then(data => res.json(data))
        .catch(error => console.log(error))
    },
    eliminarAnotacion: async (req, res) => {
        const {id} = req.body
        await anotacionSchema
        .deleteOne({_id: id})
        .then(data => res.json(data))
        .catch(error => console.log(error))
    },
}

export default anotacionCrontoller