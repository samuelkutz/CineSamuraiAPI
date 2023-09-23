import FilmesModel from "../models/FilmesModel.js"
import ValidacaoFilmes from "../services/ValidacaoFilme.js"
import FilmesDAO from "../DAO/FilmesDAO.js"
import IngressoDAO from "../DAO/IngressoDAO.js"

class FilmesController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos os filmes
         */
        app.get("/filmes", async (req, res) => {
            try{
                const filmes = await FilmesDAO.buscarTodosOsFilmes()
                res.status(200).json(filmes)
            }
            catch (error) {
                console.log(error)
                res.status(404).json({...error})
            }
        })

        /**
         * Rota para buscar filmes pelo id
         */
        app.get("/filmes/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await FilmesDAO.buscarFilmePorId(id)
                res.status(200).json(resposta)
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({id: id, ...error})
            }
        })

        app.delete("/filmes/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoFilmes.validarExistenciaPorId(id)
                FilmesDAO.deletarFilmePorId(id)
                res.status(200).json({ error: false, message: "Filme deletado com sucesso"})
            } 
            catch (error) {
                console.log(error)
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir um novo Filme
         */
        app.post("/Filmes", async (req, res)=>{
            const body = Object.values(req.body)

            try {
                await ValidacaoFilmes.validaCamposFilme(...body)
                const FilmeModelado = new FilmesModel(...body)
                try {
                    await FilmesDAO.inserirFilme(FilmeModelado)
                    res.status(201).json({error: false, message: "Filme cadastrado com sucesso"})
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
         * Rota para atualizar um registro já existente na tabela filmes
         */
        app.put("/filmes/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.values(req.body)
            try {
                await ValidacaoFilmes.validarExistenciaPorId(id)

                try {
                    await ValidacaoFilmes.validaCamposFilme(...body)
                    const filmeMOdelado = new FilmesModel(...body)

                    FilmesDAO.atualizarFilmesPorId(id, filmeMOdelado)
                    res.status(204).json({error: false, message: "Filmes atualizado com sucesso"})
                } 
                catch (error) {
                    console.error(error)
                    res.status(400).json({error: true, message: `Campos invalidos`})
                }
            }
            catch (error) {
                console.error(error)
                res.status(404).json({error: true, message: `Filmes não encontrado para o id ${id}`})
            }
        })
    }
}

export default FilmesController