const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Telefone extends Model {}

Telefone.init({
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, modelName: 'telefone' });

module.exports = Telefone;
