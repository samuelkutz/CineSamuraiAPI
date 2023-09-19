import UsuariosDAO from "../DAO/UsuariosDAO.js";
import {cpf} from "cpf-cnpj-validator"

class ValidacaoServices{
    /**
     * Método que valida a existencia do usuário na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static validarExistenciaPorId(id){
        const usuario = UsuariosDAO.buscarUsuarioPorId(id)
        return usuario
    }

    /**
     * Métodos de validação de nome e sobrenome
     * @param {string} nome 
     * @param {string} sobrenome 
     * @returns {boolean}
     */
    static validaNome(nome){
        return typeof nome == "string" && nome.length > 2
    }
    static validaSobrenome(sobrenome){
        return typeof sobrenome == "string" && sobrenome.length > 2
    }

    /**
     * 
     * @param {String} email 
     * @returns {boolean}
     */
    static validarExistenciaEmail(email){
        const emailExistente = UsuariosDAO.buscarEmailUsuario(email)
        return emailExistente
    }

    /**
     * Método para validação de email
     * @param {string} email 
     * @returns {boolean}
     */
    static validaEmail(email){
        return typeof email == "string" && email.length > 11 && email.includes("@") && email.includes(".com") &&
        (email.includes("gmail") || email.includes("hotmail"))
    }

    /**
     * Método para validação de cpf
     * @param {string}  
     * @returns {boolean}
     */
    static validaCPF(numCPF){
        return cpf.isValid(numCPF)
    }

    /**
     * 
     * @param {string} senha 
     * @returns {boolean}
     */
    static validarExistenciaSenha(senha){
        const senhaExistente = UsuariosDAO.buscarSenhaUsuario(senha)
        return senhaExistente 
    }

    /**
     * Método para validação de senha
     * @param {string} senha
     * @returns {boolean}
     */
    static validaSenha(senha){
        return senha.length > 5 && senha.length <= 11 
    }

    /**
     * Método para validação de telefone
     * @param {string} telefone 
     * @returns {boolean}
     */
    static validaTelefone(telefone){
        const telefoneInt = parseInt(telefone)
        return typeof telefone == "string" && telefone.length > 11 && telefone == telefoneInt
    }

    /**
     * 
     * @param {string} nome 
     * @param {string} sobrenome 
     * @param {string} email 
     * @param {string} numCPF 
     * @param {string} senha 
     * @param {string} telefone 
     * @returns 
     */
    static validaCamposUsuario(nome, sobrenome, email, numCPF, senha, telefone){
        const ehValido = this.validaNome(nome) && this.validaSobrenome(sobrenome) && this.validaEmail(email) && this.validaCPF(numCPF) 
        && this.validaSenha(senha) && this.validaTelefone(telefone)
        return ehValido
    }
}

export default ValidacaoServices