import UsuariosModel from "../models/UsuariosModel.js";
import DAO from "./DAO.js";

const CADASTRO_USUARIOS_TABLE = "cadastro_usuarios"

class UsuariosDAO extends DAO{
    /**
     * Método de inserção de dados da tabela Cadastro Usuários
     * @param {UsuariosModel} data 
     */
    static async inserirUsuario(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO cadastro_usuarios (nome_usuario, sobrenome, email_cadastro, cpf, senha_cadastro, telefone) VALUES (?,?,?,?,?,?)
        `
        const resultado = await this.inserir(query, dataValues)
        return resultado
    }

    /**
     * Método de busca de registros específicos na tabela Cadastro Usuários através de um identificador
     * @param {string} id 
     * @returns 
     */
    static buscarUsuarioPorId(id){
        return this.buscarPorId(CADASTRO_USUARIOS_TABLE, id)
    }

    /** 
     * @param {string} email 
     * @returns 
     */
    static buscarEmailUsuario(email){
        return this.buscarDado(CADASTRO_USUARIOS_TABLE, email)
    }

    /**
     * @param {string} senha 
     * @returns 
     */
    static buscarSenhaUsuario(senha){
        return this.buscarDado(CADASTRO_USUARIOS_TABLE, senha)
    }

    /**
     * Método de deleção de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     */
    static deletarUsuarioPorId(id){
        this.deletarPorId(CADASTRO_USUARIOS_TABLE, id)
    }

    /**
     * Atualiza um registro específico da tabela Usuários através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static AtualizarUsuarioPorId(id, data){
        this.atualizarPorId(CADASTRO_USUARIOS_TABLE, id, data)
    }
}

export default UsuariosDAO;