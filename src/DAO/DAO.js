import Database from "../database/Database.js";

class DAO {
    /**
     * Método de inserção de dados
     * @param {string} query 
     * @param {Array<any>} data 
     * @returns {Promise<{error: boolean, message: string}>}
     */
    static async inserir(query, data) {
        return new Promise((resolve, reject) => {
            Database.run(query, data, function (error) {
                if (error) {
                    console.error(error)
                    reject(error)
                } else {
                    resolve({ error: false, message: "Usuário criado com sucesso"})
                }
            })
        })
    }

    /**
     * 
     * Método de busca de dados
     * @param {string} query 
     * @returns {Promise<Array<any>>}
     */
    static async buscar(query) {
            return new Promise((resolve, reject) => {
                Database.all(query, (error, rows) => {
                if (error) {
                    console.error(error)
                    reject(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    /**
     * Método de busca de dados específicos através de um identificador
     * @param {string} query 
     * @param {string} id 
     * @returns {Promise<any>}
     */
    static buscarPorId(query, id) {
        return new Promise((resolve, reject) => {
            Database.get(query, id, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    }

    /**
     * Método de busca de dados específicos através do próprio dado
     * @param {string} query 
     * @param {string} dado 
     * @returns {Promise<any>}
     */

    static buscarDado(query, dado) {
        return new Promise((resolve, reject) => {
            Database.get(query, dado, (error, row) => {
                if (error) {
                    console.error(error)
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    }

    /**
     * Método de deleção de dados específicos através de um identificador
     * @param {string} query 
     * @param {string} id 
     */
    static deletarPorId(query, id){
        new Promise((resolve, reject) => {
            Database.all(query, id, (error) => {
                if (error) {
                    console.error(error)
                    reject(error)
                }
            })
        })
    }

    /**
     * Atualiza um registro específico na base de dados através de um identificador
     * @param {string} query 
     * @param {string} id 
     * @param {any} data 
     */
    static atualizarPorId(query, id, data){
        return new Promise((resolve, reject) => {
            Database.run(query, [...data, id], (error) => {
                if(error){
                    console.error(error)
                    reject(error)
                }
            })
        })
    }
}

export default DAO;