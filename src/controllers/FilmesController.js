import FilmesDAO from "../DAO/FilmesDAO.js";
import FilmesModel from "../models/FilmesModel.js";

class FilmesController {
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app) {
        /**
         * Rota para buscar todos os filmes
         */
        app.get("/filmes", async (req, res) => {
            try {
                const filmes = await FilmesDAO.buscarTodosFilmes();
                res.status(200).json(filmes);
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao buscar filmes" });
            }
        });

        /**
         * Rota para buscar um filme pelo ID
         */
        app.get("/filmes/:id", async (req, res) => {
            const id = req.params.id;

            try {
                const filme = await FilmesDAO.buscarFilmePorId(id);

                if (filme) {
                    res.status(200).json(filme);
                } else {
                    res.status(404).json({ error: true, message: `Filme não encontrado para o ID ${id}` });
                }
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao buscar o filme" });
            }
        });

        /**
         * Rota para inserir um novo filme
         */
        app.post("/filmes", async (req, res) => {
            const filmeData = req.body;

            try {
                const resultado = await FilmesDAO.inserirFilme(filmeData);
                res.status(201).json({ error: false, message: "Filme cadastrado com sucesso", id: resultado.lastInsertId });
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao cadastrar o filme" });
            }
        });

        /**
         * Rota para atualizar um filme pelo ID
         */
        app.put("/filmes/:id", async (req, res) => {
            const id = req.params.id;
            const filmeData = req.body;

            try {
                await FilmesDAO.atualizarFilmePorId(id, filmeData);
                res.status(204).json({ error: false, message: "Filme atualizado com sucesso" });
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao atualizar o filme" });
            }
        });

        /**
         * Rota para deletar um filme pelo ID
         */
        app.delete("/filmes/:id", (req, res) => {
            const id = req.params.id;

            try {
                FilmesDAO.deletarFilmePorId(id);
                res.status(200).json({ error: false, message: "Filme removido com sucesso" });
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao deletar o filme" });
            }
        });
    }
}

export default FilmesController;
