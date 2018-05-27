'use strict'

var express = require('express');
var userController = require('../controllers/userController');

var api = express.Router();

api.get('/usuario', userController.prueba);
api.post('/usuario', userController.saveUser);

module.exports = api;