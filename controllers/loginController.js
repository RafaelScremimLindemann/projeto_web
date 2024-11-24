//O módulo path do nodejs fornece várias utilidades para trabalhar com caminhos de arquivos e diretórios de maneira independente de sistema operacional
const path = require('path');
const db = require('../models/db');
const express = require('express');
const { renderMenuPrincipal } = require('./menuPrincipalController');
const app = express();

// Renderiza a página HTML de login
// função chamada renderLoginPage, que é usada para responder a uma requisição HTTP 
//enviando um arquivo HTML específico para o cliente
const renderLoginPage = (req, res) => {

/*path.join Junta partes de um caminho de forma segura, 
garantindo compatibilidade entre diferentes sistemas operacionais*/
/*sendFile envia um arquivo como respota ao servidor*/ 
/*É uma constante global no Node.js que representa o caminho absoluto
 do diretório atual do arquivo em execução.*/
    res.sendFile(path.join(__dirname, '../public/login.html'));
};

//Validando login e senha
//Async Transforma a função em uma função assíncrona.
//Await é usada para pausar a execução da função até que a Promise seja resolvida ou rejeitada

// Rota para validar login
const validaLogin = async (req, res) => {
  const { login, senha } = req.body;

  try {
    // Consulta no banco de dados
    const [rows] = await db.query(
      'SELECT * FROM usuariologin WHERE login = ? AND senha = ?',
      [login, senha]

    );

    if (rows.length > 0) {
      renderMenuPrincipal(req, res);

    } else {
      // Login inválido
      res.status(401).send({ success: false, message: 'Credenciais inválidas.' });
      
    }
  } catch (error) {
    console.error('Erro no servidor:', error);
    res.status(500).send({ success: false, message: 'Erro no servidor.' });
  }
};


module.exports = { renderLoginPage , validaLogin };
