import express from "express"; 
import adultoController from "../controller/adultoController.js"; 

const routes = express.Router();

routes.get("/adultos",adultoController.listarAdultos);
routes.get("/adultos/:id",adultoController.listarAdultosPorId);
routes.post("/adultos",adultoController.cadastrarAdulto);
routes.put("/adultos/:id",adultoController.atualizarAdulto);
routes.delete("/adultos/:id", adultoController.deletarAdulto);

export default routes;