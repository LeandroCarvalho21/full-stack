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
    return times.filter((time) => time.id == id);
}

//pegar a posição do elemento dentro array por id 
function buscarIdTimes(id) {
    return times.findIndex((time) => time.id == id);
}
//-------------------------------------------------
//Rota Principal nomes
app.get('/', (req, res) => {
    res.send("Rota Principal.");
});

//Rota teste
app.get('/teste', (req, res) => {
    res.send("API nodePeople está funcionando!");
});

//Rota para ver todos objetos do array
app.get('/listaNomes', (req, res) => {
    res.send(nomes);
});

//Rota para buscar por ID 
app.get('/listaNomes/:id', (req, res) => {
    let index = req.params.id;
    res.json(buscarNomePorId(index));
});

//Rota para cadastrar
app.post("/listaNomes", (req, res) => {
    nomes.push(req.body);
    res.status(201).send('Nomes cadastrado com sucesso!');
})

//alterar nome e idade por Id
app.put("/listaNomes/:id", (req, res) => {
    let index = buscarIdNomes(req.params.id);
    nomes[index].nome = req.body.nome;
    nomes[index].idade = req.body.idade;
    res.json(nomes)
})

//Rota para excluir
app.delete('/listaNomes/:id', (req, res) => {
    let id = req.params.id;
    let index = buscarIdNomes(id)
    //se não encotrar, retorna erro 
    if (index === -1) {
        return res.status(404).send(`Nenhum nome com Id ${id} foi encontrado`)
    }
    nomes.splice(index, 1);
    res.send(`Nomes por Id ${req.params.id} excluida com sucesso`);
})

//-----------------------------------------------

//Rota principal dos times 
app.get("/RotaPrincipalTimes", (req, res) => {
    res.send("Rota principal de times");
})

//Ver todos times do array
app.get("/todosTimes", (req, res) => {
    res.send(times);
})

//Rota para buscar time por Id
app.get("/todosTimes/:id", (req, res) => {
    let index = req.params.id;
    res.json(buscarTimesPorId(index));
})

//rota para cadastar time
app.post("/todosTimes", (req, res) => {
    times.push(req.body);
    res.status(201).send("Time cadastrado");
});

// alterar valor dos times por id 
app.put("/todosTimes/:id", (req, res) => {


    let index = buscarIdTimes(req.params.id);
    times[index].time = req.body.time;
    times[index].estado = req.body.estado;
    times[index].titulos = req.body.titulos;

    res.json(times)
})

//rota para deletar times 
app.delete("/todosTimes/:id", (req, res) => {
    let id = req.params.id;
    let index = buscarIdTimes(id);
    if (index === -1) {
        return res.status(404).send(`Nenhum time com Id ${id} foi encontrado`);
    }
    times.splice(index, 1);
    res.send(`Times por Id ${req.params.id} excluida com sucesso`);
})

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
