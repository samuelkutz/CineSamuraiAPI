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
         * Rota para buscar preço pelo id
         */
        app.get("/preco/:id", (req, res)=>{
            const id = req.params.id
            const isValid = ValidacaoPreco.validarExistenciaPorId(id)
            if(isValid){
                const resposta = PrecoDAO.buscarPrecoPorId(id)
                res.status(200).json(resposta)
            }
            res.status(404).json({error: true, message: `Preço não encontrado para o id ${id}`})
        })
        
        /**
         * Rota para deletar preço
         */
        app.delete("/preco/:id", (req, res)=>{
            const id = req.params.id
            const isValid = ValidacaoPreco.validarExistenciaPorId(id)
            if(isValid){
                PrecoDAO.deletarUsuarioPorId(id)
                res.status(200).json({error: false, message: "Preço removido com sucesso"})
            }
            res.status(404).json({error: true, message: `Preço não encontrado para o id ${id}`})
        })

        /**
         * Rota para inserir um novo preço
         */
        app.post("/preco", async (req, res)=>{
            const body = Object.values(req.body)
            const isValid = ValidacaoServices.validaCamposPreco(...body)
            if(isValid){
                const PrecoModelado = new PrecoModel(...body)
                try {
                    await PrecoDAO.inserirPreco(PrecoModelado)
                    res.status(201).json({error: false, message: "Preço inserido com sucesso"})
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
         * Rota para atualizar um registro já existente na tabela preço
         */
        app.put("/preco/:id", (req, res)=>{
            const id = req.params.id
            const body = req.body
            const exists = ValidacaoPreco.validarExistenciaPorId(id)
            const isValid = ValidacaoPreco.validaCamposPreco(body.dia_semana, body.valor)
            if(exists){
                if(isValid){
                    const PrecoModelado = new PrecoModel(body.dia_semana, body.valor)
                    PrecoDAO.AtualizarPrecoPorId(id, PrecoModelado)
                    res.status(204).json({error: false, message: `Campos atualizados`})
                }
                res.status(400).json({error: true, message: `Campos invalidos`})
            }
            res.status(404).json({error: true, message: `Preco não encontrado para o id ${id}`})
        })
    }
}

export default PrecoController