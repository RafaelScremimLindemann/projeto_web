const express = require('express');
const router = express.Router();
const app = express();
const renderMenuPrincipal = require('../controllers/menuPrincipalController');


window.onload = function() {
    const sairButton = document.getElementById('sair-menu-horizontal');
    sairButton.addEventListener('click', function() {
        // Redireciona para a página de login
        window.location.href = '/';  // Supondo que a rota para login seja '/login'
    });
};

// Rota GET para exibir a página de menuPrincipal
app.get('/menuPrincipal', renderMenuPrincipal);

// Rota POST para processar o menuPrincipal