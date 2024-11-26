const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Endereco extends Model {}

Endereco.init({
  rua: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, modelName: 'endereco' });

module.exports = Endereco;
