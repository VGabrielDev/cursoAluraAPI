import express from "express"; 
import PessoaController from "../controller/pessoaController.js"; 

const routes = express.Router();

routes.get("/pessoas",PessoaController.listarPessoas);

export default routes;