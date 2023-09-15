/**
 * Objeto modelo para usuários
 */
class UsuariosModel{
    /**
     * 
     * @param {string} nome_usuario 
     * @param {string} sobrenome 
     * @param {string} email_cadastro 
     * @param {string} cpf 
     * @param {string} senha_cadastro 
     * @param {string} telefone 
     */
    constructor(nome_usuario, sobrenome, email_cadastro, cpf, senha_cadastro, telefone){
        this.nome_usuario = nome_usuario
        this.sobrenome = sobrenome
        this.email_cadastro = email_cadastro
        this.cpf = cpf
        this.senha_cadastro = senha_cadastro
        this.telefone = telefone
    }
}

export default UsuariosModel