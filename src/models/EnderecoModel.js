/**
 * Objeto modelo para endereco
 */

class EnderecoModel{
    /**
    * @param {string} logradouro 
    * @param {string} numero 
    * @param {string} complemento 
    * @param {string} cidade 
    * @param {string} uf 
    * @param {string} cep 
    */
    constructor(logradouro, numero, complemento, cidade, uf, cep){
        this.logradouro = logradouro
        this.numero = numero
        this.complemento = complemento
        this.cidade = cidade
        this.uf = uf
        this.cep = cep
    }
}

export default EnderecoModel