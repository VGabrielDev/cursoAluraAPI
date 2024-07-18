import express from "express"; 
import PessoaController from "../controller/pessoaController.js"; 

const routes = express.Router();

routes.get("/pessoas",PessoaController.listarPessoas);
routes.get("/pessoas/:id",PessoaController.listarPessoasPorId);
routes.post("/pessoas",PessoaController.cadastrarPessoa);
routes.put("/pessoas/:id",PessoaController.atualizarPessoa);
routes.delete("/pessoas/:id", PessoaController.deletarPessoa);

export default routes;