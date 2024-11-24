const path = require('path');
const db = require('../models/db');

const renderMenuPrincipal = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/menuPrincipal.html'));
};

module.exports = { renderMenuPrincipal };