import PrecoModel from "../models/PrecoModel.js"
import DAO from "./DAO.js"

const PRECO_TABLE = "preco"

class PrecoDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Preco
     * @param {PrecoModel} data 
     */
    static async inserirPreco(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${PRECO_TABLE} (dia_semana, valor) VALUES (?,?)
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
     * Método que retorna todos os registros da tabela Preco
     * @returns {Array<PrecoModel>}
     */
    static async buscarTodosOsPreco(){
        const query = `
        SELECT * FROM ${PRECO_TABLE};
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
     * Método de busca de registros específicos na tabela Preco através de um identificador
     * @param {string} id 
     * @returns {PrecoModel}
     */
    static async buscarPrecoPorId(id){
        const query = `
        SELECT * FROM ${PRECO_TABLE} where id_preco = ?;
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
     * Método de deleção de registros específicos na tabela Preco através de um identificador
     * @param {string} id 
     */
    static async deletarPrecoPorId(id){
        const query = `
        DELETE FROM ${PRECO_TABLE} WHERE id_preco = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Preco através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async atualizarPrecoPorId(id, data){
        const query = `
        UPDATE ${PRECO_TABLE} SET (dia_semana, valor) = (?,?) WHERE id_preco = ?;
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

export default PrecoDAO;