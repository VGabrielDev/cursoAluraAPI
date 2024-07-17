import express from "express"
import conectarNaDatabase from "./config/dbConnect.js";
import pessoas from "./models/Pessoa.js";
import routes from "./routes/index.js";

const conexao = await conectarNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro)
});

conexao.once("open", () => {
    console.log("conexão com o banco feita com sucesso")
});

const app = express();
routes(app);

app.delete("/pessoa/:id", (req, res) => {

    const indice = buscarindice(req.params.id); 
    pessoas.splice(indice, 1); 
    res.status(200).send("Pessoa deletada com sucesso")

});

export default app;

