import SalaDAO from "../DAO/SalaDAO.js";

class ValidacaoSala{
    /**
     * Método que valida a existencia de uma sala na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static async validarExistenciaPorId(id){
        try {
            await SalaDAO.buscarSalaPorId(id)
        } 
        catch (error) {
            throw error
        }
    }
    /**
     * Método de validação de capacidade
     * @param {integer} capacidade
     * @returns {boolean}
     */
    static validaCapacidade(capacidade){
        return typeof capacidade == "int" 
    }

       /**
     * Método de validação do nome da sala
     * @param {string} capacidade
     * @returns {boolean}
     */
    static validaNomeSala(nome_sala){
        return typeof nome_sala == "string" && nome_sala.length > 2
    }

    /**
     * @param {string} capacidade
     * @param {string} nome_sala
     * @returns 
     */
    static validaCamposSala(capacidade, nome_sala){
        
        const ehValido = this.validaCapacidade(capacidade) && this.validaNomeSala(nome_sala)
        return ehValido
    }
}

export default ValidacaoSala