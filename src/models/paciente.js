const mongoose = require('mongoose')
const {Schema} = mongoose

const pacienteSchema = new Schema( {
    nombre: {type: String, required: true},
    id: {type: Number, required: true},
    Mensaje: {type: String},
    NombreAdulto: {type: String, required: true},
    idAdulto: {type: Number, required: true},
    Celular: {type: Number},
    email: {type: String},
    direccion: {type: String, required: true}
});

module.exports = mongoose.model('paciente', pacienteSchema);