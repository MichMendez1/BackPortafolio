import notasSchema from "../models/Notas.js";

const notasCrontoller = {
    obtenerNotas:  async (req, res) => {
        await notasSchema
        .find()
        .then(data => res.json(data))
        .catch(error => console.log(error))
    },
    obtenerUnaNotas:  async (req, res) => {
        const id = req.params.id
        await notasSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => console.log(error))
    },
    crearNotas: async (req, res) => {
        const datos = req.body
        for (const d of datos){
            const notas = new notasSchema(d)
            await notas
            .save()
        }
    },
    actualizarNotas: async (req, res) => {
        const datos = req.body
        for (const d of datos){
            let query = {id_alumno:d.id_alumno, nombre_nota:d.nombre_nota}
            await notasSchema
            .findOneAndUpdate(query, {$set:{nota: d.nota}})
            .then(data => res.json(data))
            .catch(error => console.log(error))
        }
    }
}

export default notasCrontoller