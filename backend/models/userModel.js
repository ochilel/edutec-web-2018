'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: 'El nombre es requerido'
    },
    lastname: {
        type: String,
        required: 'El apellido es requerido'
    },
    phone: {
        type: String,
        required: 'El telefono es requerido'
    }
});

module.exports = mongoose.model('Users', UserSchema);