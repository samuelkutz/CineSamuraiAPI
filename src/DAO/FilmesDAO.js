import FilmesModel from "../models/FilmesModel.js"
import DAO from "./DAO.js"

const FILMES_TABLE = "filmes"

class FilmesDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Filmes
     * @param {FilmesModel} data 
     */
    static async inserirFilme(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${FILMES_TABLE} (nome_filme, linguagem_original, classificacao_indicativa, duracao) VALUES (?,?,?,?)
        `

        try {
            const resultado = await this.inserir(query, dataValues)
            return resultado
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Método que retorna todos os registros da tabela Filmes
     * @returns {Array<FilmesModel>}
     */
    static async buscarTodosOsFilmes(){
        const query = `
        SELECT * FROM ${FILMES_TABLE};
        `

        try {
            const response = await this.buscar(query)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Método de busca de registros específicos na tabela Filmes através de um identificador
     * @param {string} id 
     * @returns {FilmesModel}
     */
    static async buscarFilmePorId(id){
        const query = `
        SELECT * FROM ${FILMES_TABLE} where id_filme = ?;
        `
        try {
            const response = await this.buscarPorId(query, id)
            return response
        } 
        catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Método de deleção de registros específicos na tabela Filmes através de um identificador
     * @param {string} id 
     */
    static async deletarFilmePorId(id){
        const query = `
        DELETE FROM ${FILMES_TABLE} WHERE id_filme = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Filmes através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async atualizarFilmesPorId(id, data){
        const query = `
        UPDATE ${FILMES_TABLE} SET (nome_filme, linguagem_original, classificacao_indicativa, duracao) = (?,?,?,?) WHERE id_filme = ?;
        `
        const values = Object.values(data)

        try {
            await this.atualizarPorId(query, id, [...values])
        } 
        catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default FilmesDAO;