'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var userRoutes = require('./routes/userRoute');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', userRoutes);

app.get ('/probando', (req, res) => {
    res.status(200).send({
        message: 'nuestro primer endpoint'
    });
});

module.exports = app;