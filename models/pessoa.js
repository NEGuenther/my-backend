const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Endereco = require('./endereco');
const Telefone = require('./telefone');

class Pessoa extends Model {}

Pessoa.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, modelName: 'pessoa' });

// Relacionamentos
Pessoa.hasMany(Endereco, { foreignKey: 'pessoaId' });
Pessoa.hasMany(Telefone, { foreignKey: 'pessoaId' });

module.exports = Pessoa;
