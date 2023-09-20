import Database from "../database/Database.js";

import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('database.db');

class DAO {
    /**
     * Método de inserção de dados
     * @param {string} query 
     * @param {Array<any>} data 
     * @returns {Promise<{ error: boolean, lastInsertId?: number }>}
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
    static async buscar(entidade) {
            return new Promise((resolve, reject) => {
            Database.all(query, (error, rows) => {
                if (error) {
                    console.error(error)
                    reject(error)
                } else {
                    resolve(rows)
                }
            });
        });
    }

    /**
     * Método de busca de dados específicos através de um identificador
     * @param {string} query 
     * @param {string} id 
     * @returns {Promise<any>}
     */
    static buscarPorId(query, id) {
        return new Promise((resolve, reject) => {
            Database.get(query, [id], (error, row) => {
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
     * Método de busca de dados específicos através do próprio dado
     * @param {string} query 
     * @param {string} dado 
     * @returns {Promise<any>}
     */

    static buscarDado(query, dado) {
        return new Promise((resolve, reject) => {
            Database.get(query, [dado], (error, row) => {
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
            Database.run(query, [id], (error) => {
                if (error) {
                    console.error(error)
                    reject(error)
                }
                else {
                    resolve({error : false})
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
    static atualizarPorId(query, id, data) {
        return new Database.run(query, [data.campo1, data.campo2, id], (error) => {
            if (error) {
                console.error(error)
            }
        })
    }
}

export default DAO;