const Telefone = require('../models/telefone');

exports.createTelefone = async (req, res) => {
  try {
    const { numero, pessoaId } = req.body;
    const telefone = await Telefone.create({ numero, pessoaId });
    res.status(201).json(telefone);
  } catch (err) {
    res.status(400).json({ status: 'ERRO', mensagem: err.message });
  }
};
