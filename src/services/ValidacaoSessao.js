import SessaoDAO from "../DAO/SessaoDAO.js";

class ValidacaoSessao{
    /**
     * Método que valida a existencia de uma Sessao na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static async validarExistenciaPorId(id){
        try {
            await SessaoDAO.buscarSessaoPorId(id)
        } 
        catch (error) {
            throw error
        }
    }
    /**
     * Método de validação do tipo de sessao
     * @param {string} tipo_sessao
     * @returns {boolean}
     */
    static validaTipoSessao(tipo_sessao){ 
        return typeof tipo_sessao == "string" && tipo_sessao.length < 6 
    }

    /**
     * @param {string} tipo_sessao
     * @returns 
     */
    static validaCamposSessao(tipo_sessao){
        
        const ehValido = this.validaTipoSessao(tipo_sessao) 
        return ehValido
    }
}

export default ValidacaoSessao