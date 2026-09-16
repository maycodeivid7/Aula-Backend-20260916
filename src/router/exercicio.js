import express from "express";

const router = express.Router();

router.get("/exercicio", (req, res) => {
    res.send("Hello from exercicio route!");
});