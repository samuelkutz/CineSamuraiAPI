import ProgramacaoGeralModel from "../models/ProgramacaoGeralModel.js"
import DAO from "./DAO.js"

const PROGRAMACAO_GERAL_TABLE = "programacao_geral"

class ProgramacaoGeralDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Programação Geral
     * @param {ProgramacaoGeralModel} data 
     */
    static async inserirProgramacao(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${PROGRAMACAO_GERAL_TABLE} (data_horario, tipo_linguagem) VALUES (?,?)
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
     * Método que retorna todos os registros da tabela Programação Geral
     * @returns {Array<ProgramacaoGeralModel>}
     */
    static async buscarTodasAsProgramacoes(){
        const query = `
        SELECT * FROM ${PROGRAMACAO_GERAL_TABLE};
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
     * Método de busca de registros específicos na tabela Programação Geral através de um identificador
     * @param {string} id 
     * @returns {ProgramacaoGeralModel}
     */
    static async buscarProgramacaoPorId(id){
        const query = `
        SELECT * FROM ${PROGRAMACAO_GERAL_TABLE} where id_programacao = ?;
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
     * Método de deleção de registros específicos na tabela Programação Geral através de um identificador
     * @param {string} id 
     */
    static async deletarProgramacaoPorId(id){
        const query = `
        DELETE FROM ${PROGRAMACAO_GERAL_TABLE} WHERE id_programacao = ?
        `
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Programação Geral através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
   
}

export default ProgramacaoGeralDAO;