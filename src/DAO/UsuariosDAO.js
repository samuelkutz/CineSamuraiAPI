import UsuariosModel from "../models/UsuariosModel.js"
import DAO from "./DAO.js"

const CADASTRO_USUARIOS_TABLE = "cadastro_usuarios"

class UsuariosDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Cadastro Usuários
     * @param {UsuariosModel} data 
     */
    static async inserirUsuario(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${CADASTRO_USUARIOS_TABLE} (nome_usuario, sobrenome, email_cadastro, cpf, senha_cadastro, telefone) VALUES (?,?,?,?,?,?)
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
     * Método que retorna todos os registros da tabela Usuários
     * @returns {Array<UsuariosModel>}
     */
    static async buscarTodosOsUsuarios(){
        const query = `
        SELECT * FROM ${CADASTRO_USUARIOS_TABLE};
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
     * Método de busca de registros específicos na tabela Cadastro Usuários através de um identificador
     * @param {string} id 
     * @returns {UsuariosModel}
     */
    static async buscarUsuarioPorId(id){
        const query = `
        SELECT * FROM ${CADASTRO_USUARIOS_TABLE} where id_cadastro = ?;
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
     * @param {string} email 
     * @returns {Array<UsuariosModel>}
     */
    static async buscarUsuarioPorEmail(email){
        const query = `
        SELECT * FROM ${CADASTRO_USUARIOS_TABLE} WHERE email_cadastro = ?;
        `
        try{ 
            const resposta = await this.buscarDado(query, email)
            return resposta
        }
        catch (error){
            console.error(error)
            throw error
        }
    }

    /**
     * @param {string} senha 
     * @returns {Array<any>}
     */
    static async buscarUsuarioPorSenha(senha){
        const query = `
        SELECT * FROM ${CADASTRO_USUARIOS_TABLE} WHERE senha_cadastro = ?;
        `
        try{ 
            const resposta = await this.buscarDado(query, senha)
            return resposta
        }
        catch (error){
            console.error(error)
            throw error
        }
    }

    /**
     * Método de deleção de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     */
    static async deletarUsuarioPorId(id){
        const query = `
        DELETE FROM ${CADASTRO_USUARIOS_TABLE} WHERE id_cadastro = ?
        `
        try {
            await this.deletarPorId(query, id)
        } 
        catch (error) {
            console.error(error)
            throw error
        }
    }

    /**
     * Atualiza um registro específico da tabela Usuários através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async atualizarUsuarioPorId(id, data){
        const query = `
        UPDATE ${CADASTRO_USUARIOS_TABLE} SET (nome_usuario, sobrenome, email_cadastro, cpf, senha_cadastro, telefone, id_endereco_fk) = (?,?,?,?,?,?,?) WHERE id_cadastro = ?;
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

export default UsuariosDAO;