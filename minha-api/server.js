// const express = require("express");
// const api = express();
// const porta = 80;

// const API_KEY = "123";

// function authenticateApiKey(req, res, next) {
//   const apiKey = req.params.apiKey;
//   if (apiKey === API_KEY) {
//     next();
//   } else {
//     res
//       .status(401)
//       .json({ mensagem: "acesso nao autorizado", cod_status: 401 });
//   }
// }

// api.get("/:apiKey", authenticateApiKey, (req, res) => {
//   const rotaPadrao = {
//     nome_rota: "/",
//     nome: "Romulo",
//     idade: 30,
//     metodo: "GET",
//   };

//   res
//     .status(200)
//     .json({ mensagem: "acesso autorizado", cod_status: 200, rotaPadrao });
// });
  

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express(); 
const PORT = 80;

app.use(express.json());
app.use(cookieParser());

// Rota para criar um cookie
app.post('/cookie/criar', (req, res) => {
    const { name, value } = req.body;
    res.cookie(name, value, { httpOnly: true });
    res.status(201).json({
        mensagem: 'cookie criado com sucesso',
        cod_status: 201
    });
});

// Rota para ler um cookie
app.get('/cookie/ler', (req, res) => {
    const { name } = req.query;
    const value = req.cookies[name];
    if (value) {
        res.status(200).json({
            mensagem: `O nome do cookie criado foi ${name} e o valor é ${value}`,
            cod_status: 200
        });
    } else {
        res.status(404).json({
            mensagem: 'cookie não encontrado',
            cod_status: 404
        });
    }
});

// Rota para atualizar um cookie
app.put('/cookie/atualizar', (req, res) => {
    const { name, value } = req.body;
    res.cookie(name, value, { httpOnly: true });
    res.status(201).json({
        mensagem: `O novo nome do cookie é ${name} e o novo valor é ${value}`,
        cod_status: 201
    });
});

// Rota para excluir um cookie
app.delete('/cookie/excluir', (req, res) => {
    const { name } = req.query;
    res.clearCookie(name);
    res.status(201).json({
        mensagem: 'cookie excluído com sucesso',
        cod_status: 201
    });
});

// Correção aqui, usando 'app.listen' ao invés de 'api.listen'
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


