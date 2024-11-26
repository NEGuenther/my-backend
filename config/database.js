const { Sequelize } = require('sequelize');

// Certifique-se de substituir pelos seus dados reais de banco
const sequelize = new Sequelize('seu_banco', 'root', 'sua_senha', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306, // Verifique se a porta está correta (padrão 3306)
  dialectOptions: {
    useUTC: false, // Se você não estiver usando UTC no banco de dados
  },
  timezone: '-03:00', // Ajuste de timezone, caso necessário
});

module.exports = sequelize;
