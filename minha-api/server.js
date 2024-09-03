
const express = require('express');
const api = express();
const porta = 80;

// Chave de API (simulada)
const API_KEY = '1234567890abcdef';

// Middleware de autenticação por chave de API na URL
function authenticateApiKey(req, res, next) {
    const apiKey = req.params.apiKey;
    if (apiKey && apiKey === API_KEY) {
        next(); // Chave válida, prossiga para o próximo middleware ou rota
    } else {
        res.status(401).json({ mensagem: 'acesso nao autorizado', cod_status: 401 });
    }
}

// Endpoint com autenticação usando a chave na URL
api.get('/:apiKey', authenticateApiKey, (req, res) => {
    const rotaPadrao = {
        nome_rota: '/',
        nome: 'Romulo',
        idade: 30,
        metodo: 'GET'
    };

    res.status(200).json({ mensagem: 'acesso autorizado', cod_status: 200, rotaPadrao });
});

// Iniciando o servidor
api.listen(porta, () => {
    console.log(`Servidor em execução na porta ${porta}`);
});



