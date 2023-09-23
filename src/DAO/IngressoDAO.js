import IngressoModel from "../models/IngressoModel.js"
import DAO from "./DAO.js"

const INGRESSO_TABLE = "ingresso"

class IngressoDAO extends DAO {
    /**
     * Método de inserção de dados da tabela ingresso
     * @param {IngressoModel} data 
     */
    static async inserirIngresso(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${INGRESSO_TABLE} (tipo_ingresso) VALUES (?)
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
     * Método que retorna todos os registros da tabela Tipo de ingresso
     * @returns {Array<IngressoModel>}
     */
    static async buscarTodosOsIngressos(){
        const query = `
        SELECT * FROM ${INGRESSO_TABLE};
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
     * Método de busca de registros específicos na tabela ingresso através de um identificador
     * @param {string} id 
     * @returns {IngressoModel}
     */
    static async buscarIngressoPorId(id){
        const query = `
        SELECT * FROM ${INGRESSO_TABLE} where id_ingresso = ?;
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
     * Método de deleção de registros específicos na tabela Tipo de ingresso através de um identificador
     * @param {string} id 
     */
    static async deletarIngressoPorId(id){
        const query = `
        DELETE FROM ${INGRESSO_TABLE} WHERE id_ingresso = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Tipo de ingresso através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async atualizarIngressoPorId(id, data){
        const query = `
        UPDATE ${INGRESSO_TABLE} SET (tipo_ingresso, id_preco_fk, id_sessao_fk, id_usuario_fk) = (?,?,?,?) WHERE id_ingresso = ?;
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

export default IngressoDAO;