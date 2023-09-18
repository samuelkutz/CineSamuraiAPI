import EnderecoModel from "../models/EnderecoModel"
import DAO from "./DAO.js";

const ENDERECO_TABLE = "endereco";

class EnderecoDAO extends DAO {
    /**
     * Insere um novo registro de endereço na tabela "endereco".
     * @param {Object} data - Um objeto contendo os dados do endereço.
     */
    static async inserirEndereco(data) {
        const dataValues = Object.values(data);
        const query = `
        INSERT INTO ${ENDERECO_TABLE} (logradouro, numero, complemento, cidade, uf, cep) VALUES (?,?,?,?,?,?)
    `;

        try {
            const resultado = await this.inserir(query, dataValues);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Recupera um registro de endereço da tabela "endereco" pelo seu ID.
     * @param {string} id - O ID do registro de endereço.
     * @returns {Promise<Object|null>} - O registro de endereço recuperado ou null se não encontrado.
     */
    static async buscarEnderecoPorId(id) {
        try {
            return await this.buscarPorId(ENDERECO_TABLE, id);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Exclui um registro de endereço da tabela "endereco" pelo seu ID.
     * @param {string} id - O ID do registro de endereço a ser excluído.
     */
    static async deletarEnderecoPorId(id) {
        try {
            await this.deletarPorId(ENDERECO_TABLE, id);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Atualiza um registro de endereço na tabela "endereco" pelo seu ID.
     * @param {string} id - O ID do registro de endereço a ser atualizado.
     * @param {Object} data - Um objeto contendo os dados atualizados do endereço.
     */
    static async atualizarEnderecoPorId(id, data) {
        try {
            await this.atualizarPorId(ENDERECO_TABLE, id, data);
        } catch (error) {
            throw error;
        }
    }
}

export default EnderecoDAO;
