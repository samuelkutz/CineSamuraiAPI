import UsuariosDAO from "./UsuariosDAO.js"

import DAO from "./DAO.js"

import Database from "../database/Database.js"

const query = `
SELECT * FROM endereco;
` 
const id = "1"
const email = ""

const a = await UsuariosDAO.buscarUsuarioPorId(id)

console.log(a)