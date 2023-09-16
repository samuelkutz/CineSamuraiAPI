import UsuariosModel from "../models/UsuariosModel.js"
import ValidacaoServices from "../services/ValidacaoServices.js"
import UsuariosDAO from "../DAO/UsuariosDAO.js"

class UsuariosController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        
        /**
         * Rota para buscar usuários pelo id
         */
        app.get("/usuarios/:id", (req, res)=>{
            const id = req.params.id
            const isValid = ValidacaoServices.validarExistencia(id)
            if(isValid){
                const resposta = UsuariosDAO.buscarUsuarioPorId(id)
                res.status(200).json(resposta)
            }
            res.status(404).json({error: true, message: `Usuário não encontrado para o id ${id}`})
        })

        /**
         * Rota para buscar usuários pelo email
         */
        app.get("/usuarios/:email", (req, res)=>{
            const email = req.params.email
            const isValid = ValidacaoServices.validarExistenciaEmail(email)
            if(isValid){
                const resposta = UsuariosDAO.buscarEmailUsuario(email)
                res.status(200).json(resposta)
            }
            res.status(404).json({error: true, message: "Email ou senha incorretos!"})
        })

        /**
         * Rota para buscar usuários pela senha
         */
        app.get("/usuarios/:senha", (req, res)=>{
            const senha = req.params.senha
            const isValid = ValidacaoServices.validarExistenciaSenha(senha)
            if(isValid){
                const resposta = UsuariosDAO.buscarSenhaUsuario(senha)
                res.status(200).json(resposta)
            }
            res.status(404).json({error: true, message: "Email ou senha incorretos!"})
        })

        /**
         * Rota para deletar usuário
         */
        app.delete("/usuarios/:id", (req, res)=>{
            const id = req.params.id
            const isValid = ValidacaoServices.validarExistencia(id)
            if(isValid){
                UsuariosDAO.deletarUsuarioPorId(id)
                res.status(200).json({error: false, message: "Usuário removido com sucesso"})
            }
            res.status(404).json({error: true, message: `Usuário não encontrado para o id ${id}`})
        })

        /**
         * Rota para inserir um novo usuário
         */
        app.post("/usuarios", async (req, res)=>{
            const body = Object.values(req.body)
            const isValid = ValidacaoServices.validaCamposUsuario(...body)
            if(isValid){
                const usuarioModelado = new UsuariosModel(...body)
                try {
                    await UsuariosDAO.inserirUsuario(usuarioModelado)
                    res.status(201).json({error: false, message: "Usuário cadastrado com sucesso"})
                } 
                catch (error) {
                    res.status(503).json({error: true, message: `Servidor indisponível no momento`})
                }
            } 
            else{
                res.status(400).json({error: true, message: `Campos inválidos`})
            }
        })

        /**
         * Rota para atualizar um registro já existente na tabela usuários
         */
        app.put("/usuarios/:id", (req, res)=>{
            const id = req.params.id
            const body = req.body
            const exists = ValidacaoServices.validarExistencia(id)
            const isValid = ValidacaoServices.validaCamposUsuario(body.nome, body.sobrenome, body.email, body.cpf, body.senha, body.telefone)
            if(exists){
                if(isValid){
                    const usuarioModelado = new UsuariosModel(body.nome, body.sobrenome, body.email, body.cpf, body.senha, body.telefone)
                    UsuariosDAO.AtualizarUsuarioPorId(id, usuarioModelado)
                    res.status(204).json({error: false, message: `Campos atualizados`})
                }
                res.status(400).json({error: true, message: `Campos invalidos`})
            }
            res.status(404).json({error: true, message: `Usuário não encontrado para o id ${id}`})
        })
    }
}

export default UsuariosController