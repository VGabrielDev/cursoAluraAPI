import express from "express";
import pessoas from "./pessoaRoutes.js";
import criancas from "./criancaRoutes.js";

const routes = (app) => {
app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"))

app.use(express.json(), pessoas, criancas)

};

export default routes;