const clienteService = require('../services/clienteService');

module.exports = {
    async listarTodos(req, res) {
        const clientes = await clienteService.listarTodos();
        res.json(clientes);
    },

    async buscarPorId(req, res) {
        const cliente = await clienteService.buscarPorId(req.params.id);
        if (cliente) res.json(cliente);
        else res.status(404).json({ message: 'Cliente não encontrado' });
    },

    async buscarPorNome(req, res) {
        const clientes = await clienteService.buscarPorNome(req.params.nome);
        res.json(clientes);
    },

    async salvar(req, res) {
        const cliente = await clienteService.salvar(req.body);
        res.status(201).json(cliente);
    },

    async atualizar(req, res) {
        const cliente = await clienteService.atualizar(req.params.id, req.body);
        if (cliente) res.json(cliente);
        else res.status(404).json({ message: 'Cliente não encontrado' });
    },

    async deletar(req, res) {
        const deleted = await clienteService.deletar(req.params.id);
        if (deleted) res.json({ message: 'Cliente excluído' });
        else res.status(404).json({ message: 'Cliente não encontrado' });
    },

    async contar(req, res) {
        const total = await clienteService.contar();
        res.json({ total });
    }
};
