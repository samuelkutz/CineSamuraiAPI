import express from "express";
import cors from "cors";
import {config} from "dotenv"
import UsuariosController from "./src/controllers/UsuariosController.js";
import FilmesController from "./src/controllers/FilmesController.js";

config()

const app = express();

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Servidor disponível em http://localhost:${port}`);
})

app.use(express.json())
app.use(cors())


