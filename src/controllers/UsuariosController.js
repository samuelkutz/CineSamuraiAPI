import UsuariosModel from "../models/UsuariosModel.js"
import ValidacaoUsuarios from "../services/ValidacaoUsuarios.js"
import UsuariosDAO from "../DAO/UsuariosDAO.js"

class UsuariosController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos os usuários
         */
        app.get("/usuarios", async (req, res) => {
            try{
                const usuarios = await UsuariosDAO.buscarTodosOsUsuarios()
                res.status(200).json(usuarios)
            }
            catch (error) {
                console.error(error)
                res.status(404).json({...error})
            }
        })

        /**
         * Rota para buscar usuários pelo id
         */
        app.get("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await UsuariosDAO.buscarUsuarioPorId(id)
                res.status(200).json(resposta)
            } 
            catch (error) {
                console.error(error)
                res.status(404).json({id: id, ...error})
            }
        })

        app.delete("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoUsuarios.validarExistenciaPorId(id)
                UsuariosDAO.deletarUsuarioPorId(id)
                res.status(200).json({ error: false, message: "Usuário deletado com sucesso"})
            } 
            catch (error) {
                console.error(error)
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir um novo usuário
         */
        app.post("/usuarios", async (req, res)=>{
            const body = Object.values(req.body)

            try {
                await ValidacaoUsuarios.validaCamposUsuario(...body)
                const usuarioModelado = new UsuariosModel(...body)
                try {
                    await UsuariosDAO.inserirUsuario(usuarioModelado)
                    res.status(201).json({error: false, message: "Usuário cadastrado com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(503).json({error: true, message: `Servidor indisponível no momento`})
                }
            } 
            catch (error) {
                console.error(error)
                res.status(400).json({error: true, message: `Campos inválidos`})
            }
        })

        /**
         * Rota para atualizar um registro já existente na tabela usuários
         */
        app.put("/usuarios/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.values(req.body)
            try {
                await ValidacaoUsuarios.validarExistenciaPorId(id)

                try {
                    await ValidacaoUsuarios.validaCamposUsuario(...body)
                    const usuarioModelado = new UsuariosModel(...body)

                    UsuariosDAO.atualizarUsuarioPorId(id, usuarioModelado)
                    res.status(204).json({error: false, message: "Usuário atualizado com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(400).json({error: true, message: `Campos invalidos`})
                }
            }
            catch (error) {
                console.error(error)
                res.status(404).json({error: true, message: `Usuário não encontrado para o id ${id}`})
            }
        })
    }
}

export default UsuariosController