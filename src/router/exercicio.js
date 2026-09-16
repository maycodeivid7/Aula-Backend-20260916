import express from "express";
import ControllerExercicio from "../controler/exercicio.js";

const router = express.Router();

router.get("/exercicio", ControllerExercicio.Exercicio);

export default router;

