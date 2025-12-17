import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

//indicar para express ler body com json
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Copa do Mundo");
});

//Buscar todas as seleções
app.get("/selecoes", (req, res) => {
    const sql = "select*from selecoes";
    conexao.query(sql, (erro, result) => {
        res.json(result);
    })
})

//Buscando por ID
app.get("/selecoes/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from selecoes where id=?;";
    conexao.query(sql, id, (erro, result) => {
        res.json(result[0]);
    });
})

//criando post para cadastrar
app.post("/selecoes", (req, res) => {
    const selecao = req.body;
    const sql = "insert into selecoes set?;"
    conexao.query(sql, selecao, () => {
        res.json({ mensagem: "Cadastrado com sucesso!" });
    });
});

//Deletar por ID
app.delete("/selecoes/:id", (req, res) => {
    const id = req.params.id;
    const sql = "delete from selecoes where id=?;";
    conexao.query(sql, id, (erro, result) => {
        if (result.affectedRows === 0) {
            return res.status(404).send(`Registro não encontrado`)
            // return (`erro id não encontrado ${id}`);
        } else {
            res.status(200).send(`Time deletado`);
        }
    });
})

//put por id 
app.put("/selecoes/:id", (req, res) => {
    const id = req.params.id;
    const selecao = req.body;
    const sql = "update selecoes set ? where id =? ";
    conexao.query(sql, [selecao, id], () => {
        // res.status(200).send('Time alterado');
        res.json({ mensagem: "Atualizando com sucesso!" });
    });
});

export default app;
