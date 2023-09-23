import PoltronaModel from "../models/PoltronaModel.js"
import DAO from "./DAO.js"

const POLTRONA_TABLE = "poltrona"

class PoltronaDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Poltrona
     * @param {PoltronaModel} data 
     */
    static async inserirPoltrona(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${POLTRONA_TABLE} (tipo_poltrona, disponibilidade) VALUES (?,?)
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
     * Método que retorna todos os registros da tabela Poltrona
     * @returns {Array<PoltronaModel>}
     */
    static async buscarTodasAsPoltronas(){
        const query = `
        SELECT * FROM ${POLTRONA_TABLE};
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
     * Método de busca de registros específicos na tabela Poltrona através de um identificador
     * @param {string} id 
     * @returns {PoltronaModel}
     */
    static async buscarPoltronaPorId(id){
        const query = `
        SELECT * FROM ${POLTRONA_TABLE} where id_poltrona = ?;
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
     * Método de deleção de registros específicos na tabela Poltrona através de um identificador
     * @param {string} id 
     */
    static async deletarPoltronaPorId(id){
        const query = `
        DELETE FROM ${POLTRONA_TABLE} WHERE id_poltrona = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Poltrona através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async atualizarPoltronaPorId(id, data){
        const query = `
        UPDATE ${POLTRONA_TABLE} SET (tipo_poltrona, disponibilidade) = (?,?) WHERE id_poltrona= ?;
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

export default PoltronaDAO;