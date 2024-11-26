const Endereco = require('../models/endereco');

exports.createEndereco = async (req, res) => {
  try {
    const { rua, cidade, pessoaId } = req.body;
    const endereco = await Endereco.create({ rua, cidade, pessoaId });
    res.status(201).json(endereco);
  } catch (err) {
    res.status(400).json({ status: 'ERRO', mensagem: err.message });
  }
};
