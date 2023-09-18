import DAO from "./DAO.js";
import Database from "../database/Database.js";

class IngressoDAO extends DAO {
    static async inserirIngresso(data) {
        const dataValues = Object.values(data);
        const query = `
        INSERT INTO ingresso (tipo_ingresso, id_preco_fk, id_sessao_fk, id_usuario_fk)
        VALUES (?, ?, ?, ?)
    `;
        const resultado = await this.inserir(query, dataValues);
        return resultado;
    }

    static buscarIngressoPorId(id) {
        return this.buscarPorId("ingresso", id);
    }

    static buscarIngressosPorUsuario(idUsuario) {
        const query = `
      SELECT * FROM ingresso WHERE id_usuario_fk = ?;
    `;
        return this.buscar(query, [idUsuario]);
    }

    static deletarIngressoPorId(id) {
        this.deletarPorId("ingresso", id);
    }

    static atualizarIngressoPorId(id, data) {
        this.atualizarPorId("ingresso", id, data);
    }
}

export default IngressoDAO;
