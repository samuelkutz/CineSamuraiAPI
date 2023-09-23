import PoltronaDAO from "../DAO/PoltronaDAO.js";

class ValidacaoPoltrona{
    /**
     * Método que valida a existencia de uma Poltrona na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static async validarExistenciaPorId(id){
        try {
            await PoltronaDAO.buscarPoltronaPorId(id)
        } 
        catch (error) {
            throw error
        }
    }
    /**
     * Método de validação do tipo de poltrona
     * @param {string} tipo_poltrona
     * @returns {boolean}
     */
    static validaTipoPoltrona(tipo_poltrona){
        return typeof tipo_poltrona == "string" && ["Regular", "Mobilidade Reduzida", "Cadeirante", "Acompanhante", "Obeso"].includes(tipo_poltrona)
    }

       /**
     * Método de validação da disponibilidade da poltrona
     * @param {boolean} disponibilidade
     * @returns {boolean}
     */
    static validaDisponibilidade(disponibilidade){
        return typeof disponibilidade == "boolean"
    }

    /**
     * @param {string} tipo_poltrona
     * @param {boolean} disponibilidade
     * @returns 
     */
    static validaCamposPoltrona(tipo_poltrona, disponibilidade){
        
        const ehValido = this.validaTipoPoltrona(tipo_poltrona) && this.validaDisponibilidade(disponibilidade)
        return ehValido
    }
}

export default ValidacaoPoltrona