import express from "express";
import ControllerPessoa from "../controler/pessoa.js";

const router = express.Router();

//router.get("/exercicio", ControllerPessoa.Exercicio);

router.get("/buscar", ControllerPessoa.Buscar);
router.get("/buscarum/:id", ControllerPessoa.BuscarUm); // GET This route is for fetching a single item by ID
router.post("/criar", ControllerPessoa.Criar); // POST This route is for creating a new item
router.put("/alterar/:id", ControllerPessoa.Alterar); // PUT This route is for updating an existing item
router.delete("/deletar/:id", ControllerPessoa.Deletar); // DELETE This route is for deleting an existing item

export default router;

