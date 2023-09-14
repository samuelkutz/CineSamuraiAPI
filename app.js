import express from "express";
import cors from "cors";
import {config} from "dotenv"

config()

const app = express();

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Servidor disponível em http://localhost:${port}`);
})

app.use(express.json())

