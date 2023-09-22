import EnderecoModel from "../models/EnderecoModel.js"
import ValidacaoEndereco from "../services/ValidacaoEndereco.js";
import EnderecoDAO from "../DAO/EnderecoDAO.js";

class EnderecoController {
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app) {
        /**
         * Rota para buscar endereço pelo id
         */
        app.get("/enderecos/:id", (req, res) => {
            const id = req.params.id;
            const isValid = ValidacaoServices.validarExistencia(id);
            if (isValid) {
                const resposta = EnderecoDAO.buscarEnderecoPorId(id);
                res.status(200).json(resposta);
            }
            res.status(404).json({ error: true, message: `Endereço não encontrado para o id ${id}` });
        });

        /**
         * Rota para deletar endereço
         */
        app.delete("/enderecos/:id", (req, res) => {
            const id = req.params.id;
            const isValid = ValidacaoServices.validarExistencia(id);
            if (isValid) {
                EnderecoDAO.deletarEnderecoPorId(id);
                res.status(200).json({ error: false, message: "Endereço removido com sucesso" });
            }
            res.status(404).json({ error: true, message: `Endereço não encontrado para o id ${id}` });
        });

        /**
         * Rota para inserir um novo endereço
         */
        app.post("/enderecos", async (req, res) => {
            const body = req.body;
            const isValid = ValidacaoServices.validaCamposEndereco(
                body.logradouro,
                body.numero,
                body.complemento,
                body.cidade,
                body.uf,
                body.cep
            );
            if (isValid) {
                try {
                    await EnderecoDAO.inserirEndereco(body);
                    res.status(201).json({ error: false, message: "Endereço cadastrado com sucesso" });
                } catch (error) {
                    res.status(503).json({ error: true, message: `Servidor indisponível no momento` });
                }
            } else {
                res.status(400).json({ error: true, message: `Campos inválidos` });
            }
        });

        /**
         * Rota para atualizar um registro já existente na tabela endereços
         */
        app.put("/enderecos/:id", (req, res) => {
            const id = req.params.id;
            const body = req.body;
            const exists = ValidacaoServices.validarExistencia(id);
            const isValid = ValidacaoServices.validaCamposEndereco(
                body.logradouro,
                body.numero,
                body.complemento,
                body.cidade,
                body.uf,
                body.cep
            );
            if (exists) {
                if (isValid) {
                    EnderecoDAO.atualizarEnderecoPorId(id, body);
                    res.status(204).json({ error: false, message: `Campos atualizados` });
                }
                res.status(400).json({ error: true, message: `Campos inválidos` });
            }
            res.status(404).json({ error: true, message: `Endereço não encontrado para o id ${id}` });
        });
    }
}

export default EnderecoController;
