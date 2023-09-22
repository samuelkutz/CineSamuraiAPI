import EnderecoDAO from "../DAO/EnderecoDAO.js"; 
import cep from 'cep-promise'

class ValidacaoEndereco {

    /**
     * Método que valida a existencia do endereço na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static async validarExistenciaPorId(id){
        try {
            await EnderecoDAO.buscarEnderecoPorId(id)
        } 
        catch (error) {
            throw error
        }
    }

    /**
     * Validação para o logradouro
     * @param {string} logradouro - Logradouro do endereço.
     * @returns {boolean} - true se o logradouro for válido, caso contrário, false.
     */
    static validaLogradouro(logradouro) {
        return typeof logradouro === "string" && logradouro.length > 2;
    }

    /**
     * Validação para o número do endereço
     * @param {string} numero - Número do endereço.
     * @returns {boolean} - true se o número for válido, caso contrário, false.
     */
    static validaNumero(numero) {
        return typeof numero === "string" && numero.length > 0 && parseInt(numero) > 0;
    }

    /**
     * Validação para a cidade
     * @param {string} cidade - Cidade do endereço.
     * @returns {boolean} - true se a cidade for válida, caso contrário, false.
     */
    static validaCidade(cidade) {
        return typeof cidade === "string" && cidade.length > 2;
    }

    /**
     * Validação para a UF (Unidade Federativa)
     * @param {string} uf - UF do endereço.
     * @returns {boolean} - true se a UF for válida, caso contrário, false.
     */
    static validaUF(uf) {
        return typeof uf === "string" && uf.length === 2;
    }

    /**
     * Validação para o CEP (Código de Endereçamento Postal)
     * @param {string} cep - CEP do endereço.
     * @returns {boolean} - true se o CEP for válido, caso contrário, false.
     */
    static async validaCEP(num_cep) {
        if (typeof num_cep !== "string" || num_cep.length !== 8 || !/^\d{8}$/.test(num_cep)) {
            return false; // CEP inválido
        }

        // Usa a biblioteca "cep-promise" para verificar se o CEP é válido
        try {
            const result = await cep(num_cep);
            return result && result.street; // Retorna true se o CEP for válido e encontrado
        } catch (error) {
            return false; // Erro ao verificar o CEP
        }
    
    }

    /**
     * Validação para todos os campos do endereço
     * @param {string} logradouro - Logradouro do endereço.
     * @param {string} numero - Número do endereço.
     * @param {string} cidade - Cidade do endereço.
     * @param {string} uf - UF do endereço.
     * @param {string} cep - CEP do endereço.
     * @returns {boolean} - true se todos os campos do endereço forem válidos, caso contrário, false.
     */
    static validaCamposEndereco(logradouro, numero, cidade, uf, cep) {
        const ehValido =
            this.validaLogradouro(logradouro) &&
            this.validaNumero(numero) &&
            this.validaCidade(cidade) &&
            this.validaUF(uf) &&
            this.validaCEP(cep);
        return ehValido;
    }
}

export default ValidacaoEndereco;
