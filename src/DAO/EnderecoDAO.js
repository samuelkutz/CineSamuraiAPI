import EnderecoModel from "../models/EnderecoModel.js"
import DAO from "./DAO.js"

const ENDERECO_TABLE = "endereco"

class EnderecoDAO extends DAO {
    /**
     * Método de inserção de dados da tabela endereço
     * @param {EnderecoModel} data 
     */
    static async inserirEndereco(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${ENDERECO_TABLE} (logradouro, numero, complemento, cidade, uf, cep) VALUES (?,?,?,?,?,?)
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
     * Método que retorna todos os registros da tabela Endereço
     * @returns {Array<EnderecoModel>}
     */
    static async buscarTodosOsEndereco(){
        const query = `
        SELECT * FROM ${ENDERECO_TABLE};
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
     * Método de busca de registros específicos na tabela endereço através de um identificador
     * @param {string} id 
     * @returns {EnderecoModel}
     */
    static async buscarEnderecoPorId(id){
        const query = `
        SELECT * FROM ${ENDERECO_TABLE} where id_endereco = ?;
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
     * Método de deleção de registros específicos na tabela Endereço através de um identificador
     * @param {string} id 
     */
    static async deletarEnderecoPorId(id){
        const query = `
        DELETE FROM ${ENDERECO_TABLE} WHERE id_endereco = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Endereço através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async atualizarEnderecoPorId(id, data){
        const query = `
        UPDATE ${ENDERECO_TABLE} SET (logradouro, numero, complemento, cidade, uf, cep) = (?,?,?,?,?,?) WHERE id_endereco = ?;
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

export default EnderecoDAO;