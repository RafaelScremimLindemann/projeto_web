const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Rota GET para exibir a página de login
//Sempre que um cliente fizer uma requisição GET para /login, o Express executará a lógica definida.
//renderLoginPage função que será chamada quando a rota /login for acessada. 
//Essa função é definida no módulo loginController, que foi importado no arquivo onde o router está configurado.

router.get('/login', loginController.renderLoginPage);

// Rota POST para processar o login
//router.post('/login', loginController.validaLogin);

module.exports = router;