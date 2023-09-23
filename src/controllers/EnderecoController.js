import EnderecoModel from "../models/EnderecoModel.js"
import ValidacaoEndereco from "../services/ValidacaoEndereco.js"
import EnderecoDAO from "../DAO/EnderecoDAO.js"

class EnderecoController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos os endereços
         */
        app.get("/endereco", async (req, res) => {
            try{
                const endereco = await EnderecoDAO.buscarTodosOsEndereco()
                res.status(200).json(endereco)
            }
            catch (error) {
                console.log(error)
                res.status(404).json({...error})
            }
        })

        /**
         * Rota para buscar endereços pelo id
         */
        app.get("/endereco/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await EnderecoDAO.buscarEnderecoPorId(id)
                res.status(200).json(resposta)
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({id: id, ...error})
            }
        })

        app.delete("/endereco/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoEndereco.validarExistenciaPorId(id)
                EnderecoDAO.deletarEnderecoPorId(id)
                res.status(200).json({ error: false, message: "Endereço deletado com sucesso"})
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir um novo endereço
         */
        app.post("/endereco", async (req, res)=>{
            const body = Object.values(req.body)

            try {
                await ValidacaoEndereco.validaCamposEndereco(...body)
                const EnderecoModelado = new EnderecoModel(...body)
                try {
                    await EnderecoDAO.inserirEndereco(EnderecoModelado)
                    res.status(201).json({error: false, message: "Endereço cadastrado com sucesso"})
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
         * Rota para atualizar um registro já existente na tabela endereços
         */
        app.put("/filmes/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.values(req.body)
            try {
                await ValidacaoEndereco.validarExistenciaPorId(id)

                try {
                    await ValidacaoEndereco.validaCamposEndereco(...body)
                    const endModelado = new EnderecoModel(...body)

                    EnderecoDAO.atualizarEnderecoPorId(id, endModelado)
                    res.status(204).json({error: false, message: "Endereço atualizado com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(400).json({error: true, message: `Campos invalidos`})
                }
            }
            catch (error) {
                console.error(error)
                res.status(404).json({error: true, message: `Endereço não encontrado para o id ${id}`})
            }
        })
    }
}

export default EnderecoController