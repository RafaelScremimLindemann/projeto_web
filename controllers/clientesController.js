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
                (razao_cliente, cnpj_cliente, inscricao_cliente, nomeFantasia__cliente, cep__cliente, estado__cliente, cidade__cliente, bairro__cliente, numero__cliente, contato1__cliente, contato2__cliente, email__cliente, obs__cliente) 
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

            res.status(201).json({ message: 'Cliente cadastrado com sucesso!' });
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
            res.status(500).json({ error: 'Erro ao cadastrar cliente' });
        }
    }
    // Outros métodos: buscarCliente, atualizarCliente, excluirCliente...


module.exports = {
    renderClientes,
    adicionarCliente
};