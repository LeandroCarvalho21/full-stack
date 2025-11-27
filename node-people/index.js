const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// mock
const nomes = [
    { id: 1, nome: "Fernanda", idade: "18" },
    { id: 2, nome: "Caio", idade: "23" },
    { id: 3, nome: "Pedro", idade: "56" },
    { id: 4, nome: "Samuel", idade: "45" },
    { id: 5, nome: "Doris", idade: "33" },
];

//criando função auxiliares
//retornar o objeto por ID
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id);
};

//pegar a posição ou index do elemento por Array por id 
function deleteNomePorId(id) {
    return nomes.findIndex((nome) => nome.id == id);
}

app.get('/', (req, res) => {
    res.send("Rota Principal.");
});

app.get('/teste', (req, res) => {
    res.send("API nodePeople está funcionando!");
});

app.get('/listaNomes', (req, res) => {
    res.send(nomes);
});

//rota para buscar por ID 
app.get('/listaNomes/:id', (req, res) => {
    let index = req.params.id;
    res.json(buscarNomePorId(index));
})

//Criando Post para cadastrar
//rota para cadastrar
app.post('./listaNomes', (req, res) => {
    nomes.push(req.body);
    res.status(201).send('Nomes cadastrado com sucesso!');
})

//rota para excluir
app.delete('/listaNomes/:id', (req, res) => {
    let index = deleteNomePorId(req.params.id);
    nomes.splice(index, 1);
    res.send(`Nomes por Id ${req.params.id} excluida com sucesso`);
})

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
