import SessaoModel from "../models/SessaoModel.js"
import ValidacaoSessao from "../services/ValidacaoSessao.js"
import SessaoDAO from "../DAO/SessaoDAO.js"

class SessaoController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos as Sessaos
         */
        app.get("/sessao", async (req, res) => {
            try{
                const sessao = await SessaoDAO.buscarTodasAsSessoes()
                res.status(200).json(sessao)
            }
            catch (error) {
                console.log(error)
                res.status(404).json({...error})
            }
        })

        /**
         * Rota para buscar Sessaos pelo id
         */
        app.get("/sessao/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await SessaoDAO.buscarSessaoPorId(id)
                res.status(200).json(resposta)
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({id: id, ...error})
            }
        })

        app.delete("/sessao/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoSessao.validarExistenciaPorId(id)
                SessaoDAO.deletarSessaoPorId(id)
                res.status(200).json({ error: false, message: "Sessão deletada com sucesso"})
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir uma nova Sessao
    a */
        app.post("/sessao", async (req, res)=>{
            const body = Object.values(req.body)

            try {
                await ValidacaoSessao.validaCamposSessao(...body)
                const SessaoModelada = new SessaoModel(...body)
                try {
                    await SessaoDAO.inserirSessao(SessaoModelada)
                    res.status(201).json({error: false, message: "Sessão cadastrada com sucesso"})
                } 
                catch (error) {
                    console.log(error)
                    res.status(503).json({error: true, message: `Servidor indisponível no momento`})
                }
            } 
            catch (error) {
                console.log(error)
                res.status(400).json({error: true, message: `Campos inválidos`})
            }
        })

        /**
         * Rota para atualizar um registro já existente na tabeaa Sessaos
         */
        app.put("/sessao/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.values(req.body)
            try {
                await ValidacaoSessao.validarExistenciaPorId(id)

                try {
                    await ValidacaoSessao.validaCamposSessao(...body)
                    const sessaoModelaada = new SessaoModel(...body)

                    SessaoDAO.atualizarSessaoPorId(id, sessaoModelaada)
                    res.status(204).json({error: false, message: "Sessão atualizada com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(400).json({error: true, message: `Campos invalidos`})
                }
            }
            catch (error) {
                console.error(error)
                res.status(404).json({error: true, message: `Sessão não encontrada para o id ${id}`})
            }
        })
    }
}

export default SessaoController