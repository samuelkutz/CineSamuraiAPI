import PoltronaModel from "../models/PoltronaModel.js"
import ValidacaoPoltrona from "../services/ValidacaoPoltrona.js"
import PoltronaDAO from "../DAO/PoltronaDAO.js"

class PoltronaController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos os Poltrona
         */
        app.get("/poltrona", async (req, res) => {
            try{
                const poltrona = await PoltronaDAO.buscarTodasAsPoltronas()
                res.status(200).json(poltrona)
            }
            catch (error) {
                console.log(error)
                res.status(404).json({...error})
            }
        })

        /**
         * Rota para buscar Poltrona pelo id
         */
        app.get("/poltrona/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await PoltronaDAO.buscarPoltronaPorId(id)
                res.status(200).json(resposta)
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({id: id, ...error})
            }
        })

        app.delete("/poltrona/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoPoltrona.validarExistenciaPorId(id)
                PoltronaDAO.deletarPoltronaPorId(id)
                res.status(200).json({ error: false, message: "Poltrona deletada com sucesso"})
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir uma nova poltrona
         */
        app.post("/Poltrona", async (req, res)=>{
            const body = Object.values(req.body)

            try {
                await ValidacaoPoltrona.validaCamposPoltrona(...body)
                const poltronaModelada = new PoltronaModel(...body)
                try {
                    await PoltronaDAO.inserirPoltrona(poltronaModelada)
                    res.status(201).json({error: false, message: "Poltrona cadastrada com sucesso"})
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
         * Rota para atualizar um registro já existente na tabela Poltrona
         */
        app.put("/poltrona/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.values(req.body)
            try {
                await ValidacaoPoltrona.validarExistenciaPorId(id)

                try {
                    await ValidacaoPoltrona.validaCamposPoltrona(...body)
                    const poltModelada = new PoltronaModel(...body)

                    PoltronaDAO.atualizarPoltronaPorId(id, poltModelada)
                    res.status(204).json({error: false, message: "Poltrona atualizada com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(400).json({error: true, message: `Campos invalidos`})
                }
            }
            catch (error) {
                console.error(error)
                res.status(404).json({error: true, message: `Poltrona não encontrada para o id ${id}`})
            }
        })
    }
}

export default PoltronaController