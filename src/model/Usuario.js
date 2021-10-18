const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nome: String,
    senha: String
})

const usuario = mongoose.model('usuario', dataSchema);
module.exports = usuario;