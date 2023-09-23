import ProgramacaoGeralModel from "../models/ProgramacaoGeralModel.js"
import ValidacaoProgramacaoGeral from "../services/ValidacaoProgramacaoGeral.js"
import ProgramacaoGeralDAO from "../DAO/ProgramacaoGeralDAO.js"

class ProgramacaoGeralController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos os as programações
         */
        app.get("/programacao", async (req, res) => {
            try{
                const programacaoGeral = await ProgramacaoGeralDAO.buscarTodasAsProgramacoes()
                res.status(200).json(programacaoGeral)
            }
            catch (error) {
                console.log(error)
                res.status(404).json({...error})
            }
        })

        /**
         * Rota para buscar programação pelo id
         */
        app.get("/programacao/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await ProgramacaoGeralDAO.buscarProgramacaoPorId(id)
                res.status(200).json(resposta)
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({id: id, ...error})
            }
        })

        app.delete("/programacao/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoProgramacaoGeral.validarExistenciaPorId(id)
                ProgramacaoGeralDAO.deletarProgramacaoPorId(id)
                res.status(200).json({ error: false, message: "Programação deletada com sucesso"})
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir uma nova programação
         */
        app.post("/programacao", async (req, res)=>{
            const body = Object.values(req.body)

            try {
                await ValidacaoProgramacaoGeral.validaCamposProgramacaoGeral(...body)
                const ProgramacaoModelada = new ProgramacaoGeralModel(...body)
                try {
                    await ProgramacaoGeralDAO.inserirProgramacao(ProgramacaoModelada)
                    res.status(201).json({error: false, message: "Programação cadastrada com sucesso"})
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
         * Rota para atualizar um registro já existente na tabela programação
         */
        app.put("/programacao/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.values(req.body)
            try {
                await ValidacaoProgramacaoGeral.validarExistenciaPorId(id)

                try {
                    await ValidacaoProgramacaoGeral.validaCamposProgramacaoGeral(...body)
                    const ProgramacaoModelada = new ProgramacaoGeralModel(...body)

                    ProgramacaoGeralDAO.atualizarProgramacaoPorId(id, ProgramacaoModelada)
                    res.status(204).json({error: false, message: "Programação Geral atualizada com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(400).json({error: true, message: `Campos invalidos`})
                }
            }
            catch (error) {
                console.error(error)
                res.status(404).json({error: true, message: `Programação Geral não encontrada para o id ${id}`})
            }
        })
    }
}

export default ProgramacaoGeralController