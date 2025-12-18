import express from "express";
import seleçoesRoutes from "../routes/selecoes.routes.js";

const app = express();

//indicar para express ler body com json
app.use(express.json());


app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!");
});

//indica a rota da seleções
app.use(seleçoesRoutes);

//rota 404
app.use((req,res)=>{
    res.status(404).json({mensagem:"Rota não encostrada"}); 
})

export default app;
