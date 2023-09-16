class FilmesModel {
    /**
     * @param {string} nome_filme 
     * @param {string} linguagem_original 
     * @param {string} classificacao_indicativa 
     * @param {string} duracao 
     */
    constructor(nome_filme, linguagem_original, classificacao_indicativa, duracao) {
        this.nome_filmes = nome_filme
        this.linguagem_original = linguagem_original
        this.classificacao_indicativa = classificacao_indicativa
        this.duracao = duracao
    }
}


export default FilmesModel