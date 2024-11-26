const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ status: 'ERRO', mensagem: 'Acesso não autorizado' });

  try {
    const decoded = jwt.verify(token, 'seu-segredo-aqui');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ status: 'ERRO', mensagem: 'Token inválido' });
  }
};
