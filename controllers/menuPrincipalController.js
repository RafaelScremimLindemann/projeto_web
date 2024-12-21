const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const { renderClientes } = require('./clientesController');

const renderMenuPrincipal = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/menuPrincipal.html'));
};

module.exports = { renderMenuPrincipal, renderClientes };