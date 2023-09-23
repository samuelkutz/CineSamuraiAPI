import PrecoModel from "../models/PrecoModel.js"
import ValidacaoPreco from "../services/ValidacaoPreco.js"
import PrecoDAO from "../DAO/PrecoDAO.js"

class PrecoController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos os preços
         */
        app.get("/preco", async (req, res) => {
            try{
                const preco = await PrecoDAO.buscarTodosOsPreco()
                res.status(200).json(preco)
            }
            catch (error) {
                console.log(error)
                res.status(404).json({...error})
            }
        })

        /**
         * Rota para buscar precos pelo id
         */
        app.get("/preco/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await PrecoDAO.buscarPrecoPorId(id)
                res.status(200).json(resposta)
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({id: id, ...error})
            }
        })

        /**
         * Rota para deletar precos pelo id
         */
        app.delete("/preco/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoPreco.validarExistenciaPorId(id)
                PrecoDAO.deletarPrecoPorId(id)
                res.status(200).json({ error: false, message: "Preço deletado com sucesso"})
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir um novo preco
         */
        app.post("/preco", async (req, res)=>{
            const body = Object.values(req.body)

            try {
                await ValidacaoPreco.validaCamposPreco(...body)
                const PrecoModelado = new PrecoModel(...body)
                try {
                    await PrecoDAO.inserirPreco(PrecoModelado)
                    res.status(201).json({error: false, message: "Preço adicionado com sucesso"})
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
         * Rota para atualizar um registro já existente na tabela preco
         */
        app.put("/preco/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.values(req.body)
            try {
                await ValidacaoPreco.validarExistenciaPorId(id)

                try {
                    await ValidacaoPreco.validaCamposPreco(...body)
                    const precoModelado = new PrecoModel(...body)

                    PrecoDAO.atualizarPrecoPorId(id, precoModelado)
                    res.status(204).json({error: false, message: "Preço atualizado com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(400).json({error: true, message: `Campos invalidos`})
                }
            }
            catch (error) {
                console.error(error)
                res.status(404).json({error: true, message: `Preço não encontrado para o id ${id}`})
            }
        })
        
    } //fecha static rotas
}

export default PrecoController