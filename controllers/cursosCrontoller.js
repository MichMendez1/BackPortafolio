import cursoSchema from "../models/Cursos.js";

const cursosCrontoller = {
    obtenerCursos:  async (req, res) => {
        await cursoSchema
        .find()
        .then(data => res.json(data))
        .catch(error => console.log(error))
    }
}

export default cursosCrontoller