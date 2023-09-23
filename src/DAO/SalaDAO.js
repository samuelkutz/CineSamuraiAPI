import SalaModel from "../models/SalaModel.js"
import DAO from "./DAO.js"

const SALA_TABLE = "sala"

class SalaDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Sala
     * @param {SalaModel} data 
     */
    static async inserirSala(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${SALA_TABLE} (capacidade, nome_sala) VALUES (?,?)
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
     * Método que retorna todos os registros da tabela Sala
     * @returns {Array<SalaModel>}
     */
    static async buscarTodasAsSalas(){
        const query = `
        SELECT * FROM ${SALA_TABLE};
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
     * Método de busca de registros específicos na tabela Sala através de um identificador
     * @param {string} id 
     * @returns {SalaModel}
     */
    static async buscarSalaPorId(id){
        const query = `
        SELECT * FROM ${SALA_TABLE} where id_sala = ?;
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
     * Método de deleção de registros específicos na tabela Sala através de um identificador
     * @param {string} id 
     */
    static async deletarSalaPorId(id){
        const query = `
        DELETE FROM ${SALA_TABLE} WHERE id_sala = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Sala através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async atualizarSalaPorId(id, data){
        const query = `
        UPDATE ${SALA_TABLE} SET (capacidade, nome_sala) = (?,?,) WHERE id_sala = ?;
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

export default SalaDAO;