import asistenciaSchema from "../models/Asistencia.js";

const asistenciaCrontoller = {
    pasarLista: async (req, res) => {
        const datos = req.body
        for (const d of datos){
            const asistencia = new asistenciaSchema(d)
            await asistencia
            .save()
        }
    }
}

export default asistenciaCrontoller