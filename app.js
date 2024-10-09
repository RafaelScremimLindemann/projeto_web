const express = require('express');
const app = express();
require('dotenv').config();

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas (adicione suas rotas aqui)
app.use('/users', require('./routes/users'));

// Iniciar o servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//sempre acessar a pasta (cd) onde está o projeto para executá-lo
//ou botao direito no projeto open in integrated terminal
/*  - git status
    - git add .
    - 
*/