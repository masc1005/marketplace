const { Router, static } = require("express");
const express = require("express");
const path = require("path");

const gerenteController = require("./app/controller/gerenteController");

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

// variavel com função = routes
// metodo (post, get, put, delete) = post
// rota = /user
// função = (request, response)
routes.post("/gerente", gerenteController.createGerente);

// get -- buscar informação
// post -- criar informação
// put -- editar informação
// delete -- deletar informação

// patch -- editar uma informação específica

module.exports = routes;
