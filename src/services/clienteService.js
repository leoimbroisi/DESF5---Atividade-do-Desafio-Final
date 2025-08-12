const Cliente = require('../models/clienteModel');

module.exports = {
    async listarTodos() {
        return await Cliente.findAll();
    },

    async buscarPorId(id) {
        return await Cliente.findByPk(id);
    },

    async buscarPorNome(nome) {
        return await Cliente.findAll({ where: { nome } });
    },

    async salvar(dados) {
        return await Cliente.create(dados);
    },

    async atualizar(id, dados) {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) return null;
        return await cliente.update(dados);
    },

    async deletar(id) {
        return await Cliente.destroy({ where: { id } });
    },

    async contar() {
        return await Cliente.count();
    }
};
