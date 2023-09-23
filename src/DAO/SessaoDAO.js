import SessaoModel from "../models/SessaoModel.js"
import DAO from "./DAO.js"

const SESSAO_TABLE = "sessao"

class SessaoDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Sessao
     * @param {SessaoModel} data 
     */
    static async inserirSessao(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${SESSAO_TABLE} (tipo_sessao) VALUES (?)
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
     * Método que retorna todos os registros da tabela Sessao
     * @returns {Array<SessaoModel>}
     */
    static async buscarTodasAsSessoes(){
        const query = `
        SELECT * FROM ${SESSAO_TABLE};
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
     * Método de busca de registros específicos na tabela Sessao através de um identificador
     * @param {string} id 
     * @returns {SessaoModel}
     */
    static async buscarSessaoPorId(id){
        const query = `
        SELECT * FROM ${SESSAO_TABLE} where id_sessao = ?;
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
     * Método de deleção de registros específicos na tabela Sessao através de um identificador
     * @param {string} id 
     */
    static async deletarSessaoPorId(id){
        const query = `
        DELETE FROM ${SESSAO_TABLE} WHERE id_sessao = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Sessao através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async atualizarSessaoPorId(id, data){
        const query = `
        UPDATE ${SESSAO_TABLE} SET (id_filme_dk, tipo_sessao, id_programacao, sala_fk, id_poltrona_fk) = (?,?,?,?,?) WHERE id_sessao = ?;
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

export default SessaoDAO;