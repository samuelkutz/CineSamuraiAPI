import express from "express"
import cors from "cors"
import {config} from "dotenv"
import UsuariosController from "./src/controllers/UsuariosController.js"
import PrecoController from "./src/controllers/PrecoController.js"
import EnderecoController from "./src/controllers/EnderecoController.js"
import FilmesController from "./src/controllers/FilmesController.js"
import IngressoController from "./src/controllers/IngressoController.js"
import PoltronaController from "./src/controllers/PoltronaController.js"
import ProgramacaoGeralController from "./src/controllers/ProgramacaoGeralController.js"
import SalaController from "./src/controllers/SalaController.js"
// import SessaoController from "./src/controllers/SessaoController.js"

config()

const app = express();

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Servidor disponível em http://localhost:${port}`)
})

app.use(express.json())
app.use(cors())

UsuariosController.rotas(app)
PrecoController.rotas(app)
EnderecoController.rotas(app)
FilmesController.rotas(app)
IngressoController.rotas(app)
PoltronaController.rotas(app)
ProgramacaoGeralController.rotas(app)
SalaController.rotas(app)
// SessaoController.rotas(app)