const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.listarTodos);
router.get('/contar', clienteController.contar);
router.get('/:id', clienteController.buscarPorId);
router.get('/nome/:nome', clienteController.buscarPorNome);
router.post('/', clienteController.salvar);
router.put('/:id', clienteController.atualizar);
router.delete('/:id', clienteController.deletar);

module.exports = router;
