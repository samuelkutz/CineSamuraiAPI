import IngressoDAO from "../DAO/IngressoDAO.js";
import {cpf} from "cpf-cnpj-validator"

class ValidacaoIngresso{
    /**
     * Método que valida a existencia do ingresso na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static async validarExistenciaPorId(id){
        try {
            await IngressoDAO.buscarIngressoPorId(id)
        } 
        catch (error) {
            throw error
        }
    }
    

    /**
     * Método para validação do tipo de ingresso
     * @param {boolean} tipo_ingresso
     * @returns {boolean}
     */
    static validaTipoIngresso(tipo_ingresso){
        return typeof tipo_ingresso == "boolean"
    }

    /**
     * 
     * @param {string} tipo_ingresso
     * @returns 
     */
    static validaCampoIngresso(tipo_ingresso){
        const ehValido = this.validaTipoIngresso(tipo_ingresso)
        return ehValido
    }
}

export default ValidacaoIngresso