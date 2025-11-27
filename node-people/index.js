const express = require("express");
const app = express();
const PORT = 3000;

//indicar para express ler o body com json 
app.use(express.json());

// app.use(express.static('public'));

// mock
const nomes = [
    { id: 1, nome: "Fernanda", idade: "18" },
    { id: 2, nome: "Caio", idade: "23" },
    { id: 3, nome: "Pedro", idade: "56" },
    { id: 4, nome: "Samuel", idade: "45" },
    { id: 5, nome: "Doris", idade: "33" },
];

const times = [
    { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
    { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
    { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
    { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
    { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
    { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
    { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

//----------------------------------------------

//Função auxiliares para nomes
//retornar o objeto por ID
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id);
};

//pegar a posição ou index do elemento do Array por id 
function buscarIdNomes(id) {
    return nomes.findIndex((nome) => nome.id == id);
}

//-----------------------------------------------------

//função auxiliar para times
//pegar o  objeto por ID
function buscarTimesPorId(id) {
    return times.filter((nome) => times.id == id);
}

//pegar a posição do elemento dentro array por id 
function buscarIdTimes(id) {
    return times.findIndex((nome) => times.id == id);
}
//-------------------------------------------------


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
});

//rota para cadastrar
app.post("/listaNomes", (req, res) => {
    nomes.push(req.body);
    res.status(201).send('Nomes cadastrado com sucesso!');
})

//rota para excluir
app.delete('/listaNomes/:id', (req, res) => {
    let index = buscarIdNomes(req.params.id);
    nomes.splice(index, 1);
    res.send(`Nomes por Id ${req.params.id} excluida com sucesso`);
})

//rota principal dos times 
app.get("/RotaPrincipalTimes", (req, res) => {
    res.send("Rota principal de times");
})

//rota para cadastar times
app.post("/timesCadastro", (res, res) => {
    times.push(req.body);
    res.status(201).send("Time cadastrado");
});




//rota para deletar times 





app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
