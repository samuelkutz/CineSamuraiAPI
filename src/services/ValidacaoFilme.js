import FilmesDAO from "../DAO/FilmesDAO.js";
 
class ValidacaoFilme {
    /**
     * Método que valida a existencia do filme na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static async validarExistenciaPorId(id){
        try {
            await FilmesDAO.buscarFilmePorId(id)
        } 
        catch (error) {
            throw error
        }
    }

    /**
     * Método para validar o nome de um filme
     * @param {string} nome
     * @returns {boolean}
     */
    static validaNome(nome) {
        return typeof nome === "string" && nome.trim().length > 0;
    }

    /**
     * Método para validar a linguagem original de um filme
     * @param {string} linguagemOriginal
     * @returns {boolean}
     */
    static validaLinguagemOriginal(linguagemOriginal) {
        return typeof linguagemOriginal === "string" && linguagemOriginal.trim().length > 0;
    }

    /**
     * Método para validar a classificação indicativa de um filme
     * @param {string} classificacaoIndicativa
     * @returns {boolean}
     */
    static validaClassificacaoIndicativa(classificacaoIndicativa) {
        // Supondo que os valores válidos para classificacaoIndicativa sejam "Livre", "10", "12", "14", "16" ou "18"
        return ["Livre", "10", "12", "14", "16", "18"].includes(classificacaoIndicativa);
    }

    /**
     * Método para validar a duração de um filme no formato HH:MM
     * @param {string} duracao
     * @returns {boolean}
     */
    static validaDuracao(duracao) {
        // Expressão regular para verificar o formato HH:MM (por exemplo, "02:30")
        const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        return regex.test(duracao);
    }

    /**
     * Método para validar todos os campos de um filme
     * @param {object} filmeData
     * @returns {boolean}
     */
    static validaCamposFilme(filmeData) {
        const { nome_filme, linguagem_original, classificacao_indicativa, duracao } = filmeData;

        return (
            this.validaNome(nome_filme) &&
            this.validaLinguagemOriginal(linguagem_original) &&
            this.validaClassificacaoIndicativa(classificacao_indicativa) &&
            this.validaDuracao(duracao)
        );
    }
}

export default ValidacaoFilme;
