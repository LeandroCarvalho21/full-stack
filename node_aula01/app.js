const express = require("express");
const app = express();
const port = 3000;

//variavel com os dados produtos 
const produtos = [
    { id: 1, nome: 'Produto A', preco: 100 },
    { id: 2, nome: 'Produto B', preco: 150 },
    { id: 3, nome: 'Produto C', preco: 200 },
];

//criar função 
//rota principal 
app.get('/', (req, res) => {
    res.send('Bem vindo ao servidor node.js');
})

//execultando o servidor 
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})