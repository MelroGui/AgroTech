const express = require('express');

const router = express.Router();

const Cargo = require('./controllers/cargos.controller');
const Usuario = require('./controllers/usuario.controller');
const Manutencao = require('./controllers/manutencao.controller');
const Operacao = require('./controllers/opera.controller');
const Motorista = require('./controllers/motora.controller');
const Veiculo = require('./controllers/veiculo.controller');

router.get('/', Cargo.test);
router.post('/cargos/create', Cargo.create);
router.get('/cargos/read', Cargo.readAll);
router.put('/cargos/update/:id', Cargo.update);
router.delete('/cargos/delete/:id', Cargo.del);

router.get('/', Usuario.test);
router.post('/usuarios/create', Usuario.create);
router.get('/usuarios/read', Usuario.readAll);
router.put('/usuarios/update/:id', Usuario.update);
router.delete('/usuarios/delete/:id', Usuario.del);

router.get('/', Manutencao.test);
router.post('/manutencoes/create', Manutencao.create);
router.get('/manutencoes/read', Manutencao.readAll);
router.put('/manutencoes/update/:id', Manutencao.update);
router.delete('/manutencoes/delete/:id', Manutencao.del);

router.get('/', Operacao.test);
router.post('/operacoes/create', Operacao.create);
router.get('/operacoes/read', Operacao.readAll);
router.put('/operacoes/update/:id', Operacao.update);
router.delete('/operacoes/delete/:id', Operacao.del);

router.get('/', Motorista.test);
router.post('/motoras/create', Motorista.create);
router.get('/motoras/read', Motorista.readAll);
router.put('/motoras/update/:id', Motorista.update);
router.delete('/motoras/delete/:id', Motorista.del);

router.get('/', Veiculo.test);
router.post('/veiculos/create', Veiculo.create);
router.get('/veiculos/read', Veiculo.readAll);
router.put('/veiculos/update/:id', Veiculo.update);
router.delete('/veiculos/delete/:id', Veiculo.del);

module.exports = router;