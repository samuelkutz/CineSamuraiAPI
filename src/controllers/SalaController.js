import SalaModel from "../models/SalaModel.js"
import ValidacaoSala from "../services/ValidacaoSala.js"
import SalaDAO from "../DAO/SalaDAO.js"

class SalaController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos as salas
         */
        app.get("/sala", async (req, res) => {
            try{
                const sala = await SalaDAO.buscarTodasAsSalas()
                res.status(200).json(sala)
            }
            catch (error) {
                console.log(error)
                res.status(404).json({...error})
            }
        })

        /**
         * Rota para buscar salas pelo id
         */
        app.get("/sala/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await SalaDAO.buscarSalaPorId(id)
                res.status(200).json(resposta)
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({id: id, ...error})
            }
        })

        app.delete("/sala/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoSala.validarExistenciaPorId(id)
                SalaDAO.deletarSalaPorId(id)
                res.status(200).json({ error: false, message: "Sala deletada com sucesso"})
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir uma nova Sala
    a */
        app.post("/sala", async (req, res)=>{
            const body = Object.values(req.body)

            try {
                await ValidacaoSala.validaCamposSala(...body)
                const SalaModelada = new SalaModel(...body)
                try {
                    await SalaDAO.inserirSala(SalaModelada)
                    res.status(201).json({error: false, message: "Sala cadastrada com sucesso"})
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
         * Rota para atualizar um registro já existente na tabeaa salas
         */
        app.put("/sala/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.values(req.body)
            try {
                await ValidacaoSala.validarExistenciaPorId(id)

                try {
                    await ValidacaoSala.validaCamposSala(...body)
                    const salaModelada = new UsuariosModel(...body)

                    SalaDAO.atualizarUsuarioPorId(id, salaModelada)
                    res.status(204).json({error: false, message: "Sala atualizada com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(400).json({error: true, message: `Campos invalidos`})
                }
            }
            catch (error) {
                console.error(error)
                res.status(404).json({error: true, message: `Sala não encontrada para o id ${id}`})
            }
        })
    }
}

export default SalaController