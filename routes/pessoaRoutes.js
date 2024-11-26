const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoaController');

router.post('/', pessoaController.createPessoa);
router.get('/:id', pessoaController.getPessoa);
router.delete('/:id', pessoaController.deletePessoa);

module.exports = router;
