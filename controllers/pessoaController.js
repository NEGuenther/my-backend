const Pessoa = require('../models/pessoa');
const Endereco = require('../models/endereco');
const Telefone = require('../models/telefone');

// Criar nova pessoa
exports.createPessoa = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const pessoa = await Pessoa.create({ nome, email });
    res.status(201).json(pessoa);
  } catch (err) {
    res.status(400).json({ status: 'ERRO', mensagem: err.message });
  }
};

// Obter pessoa por ID
exports.getPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.id, {
      include: [Endereco, Telefone],
    });
    if (!pessoa) return res.status(404).json({ status: 'ERRO', mensagem: 'Pessoa não encontrada' });
    res.status(200).json(pessoa);
  } catch (err) {
    res.status(400).json({ status: 'ERRO', mensagem: err.message });
  }
};

// Deletar pessoa
exports.deletePessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.id);
    if (!pessoa) return res.status(404).json({ status: 'ERRO', mensagem: 'Pessoa não encontrada' });
    await pessoa.destroy();
    res.status(200).json({ status: 'OK', mensagem: 'Pessoa excluída com sucesso' });
  } catch (err) {
    res.status(400).json({ status: 'ERRO', mensagem: err.message });
  }
};
