import express from "express";
import pessoas from "./pessoaRoutes.js";

const routes = (app) => {
app.routes("/").get((req, res) => res.status(200).send("Curso de Node.js"))
};

app.use(express.json(), pessoas)