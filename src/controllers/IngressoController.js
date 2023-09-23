import IngressoModel from "../models/IngressoModel.js"
import ValidacaoIngresso from "../services/ValidacaoIngresso.js"
import IngressoDAO from "../DAO/IngressoDAO.js"

class IngressoController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos os ingressos
         */
        app.get("/ingresso", async (req, res) => {
            try{
                const ingresso = await IngressoDAO.buscarTodosOsIngressos()
                res.status(200).json(ingresso)
            }
            catch (error) {
                console.log(error)
                res.status(404).json({...error})
            }
        })

        /**
         * Rota para buscar ingressos pelo id
         */
        app.get("/ingresso/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await IngressoDAO.buscarIngressoPorId(id)
                res.status(200).json(resposta)
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({id: id, ...error})
            }
        })

        app.delete("/ingresso/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoIngresso.validarExistenciaPorId(id)
                IngressoDAO.deletarIngressoPorId(id)
                res.status(200).json({ error: false, message: "Tipo de ingresso deletado com sucesso"})
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir um novo tipo de ingresso
         */
        app.post("/ingresso", async (req, res)=>{
            const body = Object.values(req.body)

            try {
                await ValidacaoIngresso.validaCampoIngresso(...body)
                const ingressoModelado = new IngressoModel(...body)
                try {
                    await IngressoDAO.inserirIngresso(ingressoModelado)
                    res.status(201).json({error: false, message: "Tipo de ingresso cadastrado com sucesso"})
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
         * Rota para atualizar um registro já existente na tabela ingressos
         */
        app.put("/ingresso/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.values(req.body)
            try {
                await ValidacaoIngresso.validarExistenciaPorId(id)

                try {
                    await ValidacaoIngresso.validaCampoIngresso(...body)
                    const ingressoModelado = new IngressoModel(...body)

                    IngressoDAO.atualizarIngressoPorId(id, ingressoModelado)
                    res.status(204).json({error: false, message: "Ingresso atualizado com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(400).json({error: true, message: `Campos invalidos`})
                }
            }
            catch (error) {
                console.error(error)
                res.status(404).json({error: true, message: `Ingresso não encontrado para o id ${id}`})
            }
        })
    } //fecha static rotas
}

export default IngressoController