import ProgramacaoGeralDAO from "../DAO/ProgramacaoGeralDAO.js";


class ValidacaoProgramacaoGeral{
    /**
     * Método que valida a existencia do Programacao Geral na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static async validarExistenciaPorId(id){
        try {
            await ProgramacaoGeralDAO.buscarProgramacaoPorId(id)
        } 
        catch (error) {
            throw error
        }
    }

    /**
     * Método para validação do horario e data de Programacao Geral
     * @param {datetime} data_horario
     * @returns {boolean}
     */
    static validaDataHorario(data_horario){
        return typeof data_horario == "datetime"
    }

    /**
     * 
     * @param {char} tipo_linguagem 
     * @returns 
     */
    static validaLinguagem(tipo_linguagem){
        return typeof tipo_linguagem == "char"
    }

    /**
     * @param {datetime} data_horario
     * @param {char} tipo_linguagem
     * @returns 
     */
    static validaCamposProgramacaoGeral(data_horario, tipo_linguagem){
        const ehValido = this.validaDataHorario(data_horario) && this.validaLinguagem(tipo_linguagem)
        return ehValido
    }
}

export default ValidacaoProgramacaoGeral