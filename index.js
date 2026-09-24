// npm i express
// npm init

import express from "express";
import router from "./src/router/pessoa.js";

const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// npm run dev