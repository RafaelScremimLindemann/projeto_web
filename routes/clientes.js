const express = require('express');
const router = express.Router();
const { renderClientes, adicionarCliente } = require('../controllers/clientesController');


// Rota GET para exibir a página de login
//Sempre que um cliente fizer uma requisição GET para /login, o Express executará a lógica definida.
//renderLoginPage função que será chamada quando a rota /login for acessada. 
//Essa função é definida no módulo loginController, que foi importado no arquivo onde o router está configurado.

router.get('/clientes', renderClientes);

// Rota POST para processar o cliente
router.post('/clientes', adicionarCliente);

module.exports = router;