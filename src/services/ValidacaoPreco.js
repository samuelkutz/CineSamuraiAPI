import PrecoDAO from "../DAO/PrecoDAO.js";

class ValidacaoPreco {
    /**
     * Valida a existencia da tabela preco
     * @param {string} id 
     * @returns 
     */
    static validarExistenciaPorId(id){
        const preco = PrecoDAO.buscarPrecoPorId(id)
        return preco
    }

    /**
     * Valida o campo dia da semana
     * @param {string} dia_semana 
     * @returns 
     */
    static validaDiaSemana(dia_semana) {
        return typeof dia_semana == "string" && dia_semana.length == 3
    }

    /**
     * Valida o campo valor
     * @param {float} valor 
     * @returns 
     */
    static validaValor(valor){
        return typeof valor == "float" && valor.includes(".")
    }

    static validaCamposPreco(dia_semana, valor){
        const ehValido = this.validaDiaSemana(dia_semana) && this.validaValor(valor) 
        return ehValido
    }
}

export default ValidacaoPreco