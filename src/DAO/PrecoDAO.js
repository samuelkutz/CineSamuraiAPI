import PrecoModel from "../models/PrecoModel.js"
import DAO from "./DAO.js"

const PRECO_TABLE = "preco"

class PrecoDAO extends DAO {
    /**
     * Método de inserção de dados da tabela preco
     * @param {PrecoModel} data 
     */
    static async inserirPreco(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${PRECO_TABLE} (dia_semana, valor) VALUES (?,?)
        `

        const resultado = await this.inserir(query, dataValues)
        return resultado
    }

    /**
     * Método que retorna todos os registros da tabela preco
     * @returns {Array<PrecoModel>}
     */
    static async buscarTodosOsPreco(){
        const query = `
        SELECT * FROM ${PRECO_TABLE};
        `
        return await this.buscar(query)
    }

    /**
     * Método de busca de registros específicos na tabela preco através de um identificador
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
            throw error
        }
    }


    /**
     * Método de deleção de registros específicos na tabela preco através de um identificador
     * @param {string} id 
     */
    static async deletarPrecoPorId(id){
        const query = `
        DELETE FROM ${PRECO_TABLE} WHERE id_preco = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela preco através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    
}

export default PrecoDAO;