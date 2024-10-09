const db = require('../models/db');

// Buscar todos os usuários
exports.getAllUsers = async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM users');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const bcrypt = require('bcrypt');
// Criar um novo usuário
exports.createUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(senha,10);
        const result = await db.query('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)', [nome, email, hashedPassword]);
        res.json({ message: 'Usuário criado com sucesso!', userId: result[0].insertId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
