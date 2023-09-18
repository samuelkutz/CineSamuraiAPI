import DAO from "./DAO.js";
import FilmesModel from "../models/FilmesModel.js";

const FILMES_TABLE = "filmes";

class FilmesDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Filmes
     * @param {object} data 
     * @returns {Promise<{ error: boolean, lastInsertId?: number }>}
     */
    static async inserirFilme(data) {
        const dataValues = Object.values(data);
        const query = `
        INSERT INTO filmes (nome_filme, linguagem_originaL, classificacao_indicativa, duracao)
        VALUES (?,?,?,?)
    `;
        return await this.inserir(query, dataValues);
    }

    /**
     * Método de busca de registros específicos na tabela Filmes através de um identificador
     * @param {string} id 
     * @returns {Promise<any>}
     */
    static buscarFilmePorId(id) {
        return this.buscarPorId('filmes', id);
    }

    /**
     * Método para buscar todos os filmes
     * @returns {Promise<Array<any>>}
     */
    static buscarTodosFilmes() {
        const query = 'SELECT * FROM filmes';
        return this.buscar(query);
    }

    /**
     * Método de deleção de registros específicos na tabela Filmes através de um identificador
     * @param {string} id 
     */
    static deletarFilmePorId(id) {
        this.deletarPorId('filmes', id);
    }

    /**
     * Atualiza um registro específico da tabela Filmes através de um identificador
     * @param {string} id 
     * @param {object} data 
     */
    static atualizarFilmePorId(id, data) {
        this.atualizarPorId('filmes', id, data);
    }
}

export default FilmesDAO;
