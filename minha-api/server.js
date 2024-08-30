const express = require('express')
const api = express()
const porta = 80

api.get('/', (req, res) => {
    const rotaPadrao = {
        nome_rota: '/',
        nome: 'Romulo',
        idade: 30,
        metodo: 'GET'
    }

    res.status(200)
    res.json(rotaPadrao)
})

// api.post('/cliente/novo', (req, res) => {
//     const response = {
//         mensagem:"Deu certo",
//         status:201
//     }

//     res.status(201)
//     res.json(response)
// })


// Cria usuarios
api.post('/clientes/novo', (req, res) => {

    const response = [
        {
            mensagem: 'Cliente criado com sucesso',
            status: 201
        }
    ]

    res.status(201)
    res.json(response)
})


api.put("/cliente/update/cpfcnpj/12345678901", (req, res) => {
    const response = {
      mesagem: "Dados atualizados com sucesso",
      status: 200,
    };
    res.status(200);
    res.json(response);
  });

  api.delete('/cliente/delete/cpfcnpj/12345678901' , (req, res) => {
    const response = {
      mesagem: "Dados atualizados com sucesso",
      status: 201,
    };
    res.status(201);
    res.json(response);
  });
   




api.listen(porta, () => {
    console.log(`Servidor em execução na porta ${porta}`)
})


