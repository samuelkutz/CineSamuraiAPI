import IngressoModel from "../models/IngressoModel.js"
import DAO from "./DAO.js"

const INGRESSO_TABLE = "ingresso"

class IngressoDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Ingresso
     * @param {IngressoModel} data 
     */
    static async inserirIngresso(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${INGRESSO_TABLE} (tipo_ingresso) VALUES (?)
        `

        const resultado = await this.inserir(query, dataValues)
        return resultado
    }

    /**
     * Método que retorna todos os registros da tabela Ingresso
     * @returns {Array<IngressoModel>}
     */
    static async buscarTodosOsIngresso(){
        const query = `
        SELECT * FROM ${INGRESSO_TABLE};
        `
        return await this.buscar(query)
    }

    /**
     * Método de busca de registros específicos na tabela Ingresso através de um identificador
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
            throw error
        }
    }


    /**
     * Método de deleção de registros específicos na tabela Ingresso através de um identificador
     * @param {string} id 
     */
    static async deletarIngressoPorId(id){
        const query = `
        DELETE FROM ${INGRESSO_TABLE} WHERE id_ingresso = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Ingresso através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    
}

export default IngressoDAO;