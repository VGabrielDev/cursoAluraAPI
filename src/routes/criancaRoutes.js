import express from "express"; 
import CriancaController from "../controller/criancaController.js";

const routes = express.Router();

routes.get("/criancas",CriancaController.listarCriancas);
routes.get("/criancas/:id",CriancaController.listarCriancasPorId);
routes.post("/criancas",CriancaController.cadastrarCrianca);
routes.put("/criancas/:id",CriancaController.atualizarCrianca);
routes.delete("/criancas/:id", CriancaController.deletarCrianca);

export default routes;