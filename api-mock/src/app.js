import express from "express";

const app = express();

app.use(express.json());

const cadastros = [
    {
        id: 1,
        nome: "Fernanda Silva",
        telefone: "11987654321",
        cpf: "123.456.789-00",
        email: "fernanda@gmail.com",
        idade: 28,
        endereco: "Rua das Flores, 123"
    },
    {
        id: 2,
        nome: "Caio Oliveira",
        telefone: "11922223333",
        cpf: "987.654.321-11",
        email: "caio@gmail.com",
        idade: 32,
        endereco: "Avenida Brasil, 450"
    },
    {
        id: 3,
        nome: "Pedro Almeida",
        telefone: "21999998888",
        cpf: "321.654.987-55",
        email: "pedro@hotmail.com",
        idade: 45,
        endereco: "Rua Central, 999"
    }
];

//função auxiliar para retornar objeto por Id
function buscarObjetoPorId(id) {
    return cadastros.filter((nome) => nome.id == id);
};

//função auxiliar para pegar a posição do objeto dentro do array
function pegarIndexDoObjeto(id) {
    return cadastros.findIndex((nome) => nome.id == id);
}

app.get("/", (req, res) => {
    res.send("Olá node.js");
});

app.get("/todosCadastros", (req, res) => {
    res.send(cadastros);
});

app.get("/todosCadastros:id", (req, res) => {
    const nomes = buscarObjetoPorId(req.params.id);
    if (!nomes) {
        return res.status(404).send("teste");
    }
    res.json(nomes);
})

app.post("/cadastros", (req, res) => {
    cadastros.push(req.body);
    res.status(201).send("Usuário cadastrado");
});

app.put("/todosCadastros:id", (req, res) => {
    let index = pegarIndexDoObjeto(req.params.id);
    cadastros[index].nome = req.body.nome;
    cadastros[index].telefone = req.body.telefone;
    cadastros[index].cpf = req.body.cpf;
    cadastros[index].email = req.body.email;
    cadastros[index].idade = req.body.idade;
    cadastros[index].endereco = req.body.endereco;
    res.json(cadastros);
});

app.delete("/todosCadastros/:id", (req, res) => {
    let id = req.params.id;
    let index = pegarIndexDoObjeto(id);
    if (index === -1) {
        return res.status(404).send(`Nenhum nome com Id: ${id} foi encontrado`);
    }
    cadastros.splice(index, 1);;
    res.send(`Nome por Id: ${id} excluido com sucesso`);

})

export default app;
