const express = require('express');
const app = express();
const sequelize = require('./config/database');
const pessoaRoutes = require('./routes/pessoaRoutes');
const enderecoRoutes = require('./routes/enderecoRoutes');
const telefoneRoutes = require('./routes/telefoneRoutes');
const swaggerConfig = require('./config/swagger');
const authMiddleware = require('./middlewares/authMiddleware');

app.use(express.json());

// Configuração do Swagger
swaggerConfig(app);

// Rotas
app.use('/api/pessoas', pessoaRoutes);
app.use('/api/endereco', enderecoRoutes);
app.use('/api/telefone', telefoneRoutes);

// Autenticação protegida
app.use('/api/protected', authMiddleware, (req, res) => {
  res.send('Área protegida');
});

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
