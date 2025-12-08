import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

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

export default app;
