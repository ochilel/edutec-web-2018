'use strict'

var User = require('../models/userModel');

function prueba(req, res) {
    res.status(200).send({
        message: 'Esta es una prueba de comunicacion con el servidor',
        user: req.user
    });
}

function saveUser(req, res) {
    var params = req.body;
    var name = params.name;
    var lastname = params.lastname;
    var phone = params.phone;

    var user = new User();
    user.name = name;
    user.lastname = lastname;
    user.phone = phone;

    user.save((err, userStored) => {
        if (err) {
            res.status(500).send({
                message: 'Error al guardar el usuario'
            });
        } else {
            if (!userStored) {
                res.status(404).send({
                    message: 'No se ha registrado el usuario'
                });
            } else {
                res.status(200).send({
                    user: userStored
                });
            }
        }
    });

}

module.exports = {
    prueba,
    saveUser
}