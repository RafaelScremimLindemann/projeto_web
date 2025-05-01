const path = require('path');
const db = require('../models/db');
const express = require('express');

    const renderClientes = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/clientes.html'));
    };

    // Controlador de Clientes
    // Adiciona um novo cliente ao banco de dados
    const adicionarCliente = async (req, res) => {
        try {
            //extraindo o corpo da requisição
            const {
                razaoCliente,
                cnpjCliente,
                inscricaoCliente,
                nomeFantasiaCliente,
                cepCliente,
                estadoCliente,
                cidadeCliente,
                bairroCliente,
                numeroCliente,
                contato1Cliente,
                contato2Cliente,
                emailCliente,
                observacaoCliente
            } = req.body;
            
            // Validação básica
            if (!razaoCliente || !cnpjCliente || !cepCliente || !estadoCliente || !cidadeCliente) {
                return res.status(400).json({ error: 'Preencha todos os campos obrigatórios!' });
            }

            // Query para inserir no banco de dados
            const query = `
                INSERT INTO clientes 
                (razao_cliente, cnpj_cpf_cliente, inscricao_cliente, nomeFantasia_cliente, cep_cliente, estado_cliente, cidade_cliente, bairro_cliente, numero_cliente, contato1_cliente, contato2_cliente, email_cliente, obs_cliente) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
            `;

            // Executa a query
            await db.execute(query, [
                razaoCliente,
                cnpjCliente,
                inscricaoCliente,
                nomeFantasiaCliente,
                cepCliente,
                estadoCliente,
                cidadeCliente,
                bairroCliente,
                numeroCliente,
                contato1Cliente,
                contato2Cliente,
                emailCliente,
                observacaoCliente
            ]);
            // Retorna um JSON indicando sucesso
            res.status(200).json({ success: true, message: "Cliente inserido com sucesso!" });
            
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
            res.status(500).json({ error: 'Erro ao cadastrar cliente' });
        }
    }
    // Outros métodos: buscarCliente, atualizarCliente, excluirCliente...

    const buscarCliente = async (req, res) => {
        try {
            const { cnpjCliente } = req.body;
    
            // Consulta no banco de dados
            const query = 'SELECT * FROM clientes WHERE cnpj_cpf_cliente = ?';
            const [rows] = await db.execute(query, [cnpjCliente]);
    
            // Retorna os resultados como JSON
            res.json(rows);
        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
            res.status(500).send("Erro ao buscar cliente");
        }
    };
    
    
    

    //Exporta as funções renderClientes e adicionarCliente para que possam ser usadas em outros arquivos do projeto.
    module.exports = {
    renderClientes,
    adicionarCliente,
    buscarCliente
    };