const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const loginController = require('./controllers/loginController');
const clientesRoutes = require('./routes/clientes');

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importando a função renderLoginPage.
const {renderLoginPage} = require('./controllers/loginController');

//Usado para lidar com solicitações GET feitas a uma URL específica do servidor. 
//Essas solicitações são normalmente usadas para obter dados de um servidor.
//Quando o / for chamado no navegador chama o renderLoginPage.
app.get('/', (req, res) => {
    renderLoginPage(req,res);
});

app.post('/login', loginController.validaLogin);

app.use('/', clientesRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


//sempre acessar a pasta (cd) onde está o projeto para executá-lo
//ou botao direito no projeto open in integrated terminal
/*  - git status
    - git add .
    - git commit -m "Correção erro de banco"
    - git push origin main
*/
