'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://test:testKoka@ds263837.mlab.com:63837/notifications-test', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('La conexion a mongo fue exitosa...');
        app.listen(port, () => {
            console.log('Servidor levantado exitosamente');
        })
    }
});