import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá node.js");
});


export default app;
