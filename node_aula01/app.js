const express = require("express");
const app = express();
const port = 3000;

//Middleware para servir arquivos estaticos
app.use(express.static('public'));


//variavel com os dados produtos 
const produtos = [
    { id: 1, nome: 'Produto A', preco: 100 },
    { id: 2, nome: 'Produto B', preco: 150 },
    { id: 3, nome: 'Produto C', preco: 200 },
];

///variavel de time 
const times = [
    { id: 1, nome: 'Santos ', ano: 1912 },
    { id: 2, nome: 'São paulo  ', ano: 1930 },
    { id: 3, nome: 'Palmeiras ', ano: 1914 },
]

//criar função 

//rota principal
app.get('/', (req, res) => {
    res.send('Bem vindo ao servidor node.js');
})

//rota produtos
app.get('/produtos', (req, res) => {
    res.send(produtos);
})

//rota home
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
    // console.log("Olá:",__dirname)
})

//rota times
app.get('/times', (req, res) => {
    res.send(times);
})

//execultando o servidor 
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})