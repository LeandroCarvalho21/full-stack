import app from "./src/app.js";

const PORT = 3000;

//excutar a porta 3000
app.listen(PORT, ()=>{
    console.log(`Servidor rodadndo no endereço http://localhost:${PORT}`);
})
