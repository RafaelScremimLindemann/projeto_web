const express = require('express');
const router = express.Router();
const app = express();
const renderMenuPrincipal = require('../controllers/menuPrincipalController');

// Rota GET para exibir a página de menuPrincipal
app.get('/menuPrincipal', renderMenuPrincipal);

// Rota POST para processar o menuPrincipal