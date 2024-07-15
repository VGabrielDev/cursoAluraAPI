import express from "express"
import conectarNaDatabase from "./config/dbConnect.js";
import pessoas from "./models/Pessoa.js";

const conexao = await conectarNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro)
});

conexao.once("open", () => {
    console.log("conexão com o banco feita com sucesso")
});

const app = express(); 

app.use(express.json());

function buscarindice(id){

    return pessoas.findIndex( pessoas => {
        return pessoas.id === Number(id)
    })
};

app.get("/pessoas", async (req, res) => {
  const listaPessoas = await pessoas.find({});
  console.log(listaPessoas);
res.status(200).json(listaPessoas);
});

app.get("/:id", (req, res) => {
    const id = req.params.id;
    let encontrado = buscarPeloId(id)
    res.status(200).send(encontrado);
});

app.post("/pessoas", (req, res) => {
    pessoas.push(req.body);
    res.status(201).send("Pessoa cadastrada");
});

app.put("/pessoa/:id", (req, res) => {

    const indice = buscarindice(req.params.id); 
    pessoas[indice] = req.body; 
    res.status(200).send("Alterado");

});

app.delete("/pessoa/:id", (req, res) => {

    const indice = buscarindice(req.params.id); 
    pessoas.splice(indice, 1); 
    res.status(200).send("Pessoa deletada com sucesso")

});

export default app;

