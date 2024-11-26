const express = require('express');
const router = express.Router();
const telefoneController = require('../controllers/telefoneController');

router.post('/', telefoneController.createTelefone);

module.exports = router;
