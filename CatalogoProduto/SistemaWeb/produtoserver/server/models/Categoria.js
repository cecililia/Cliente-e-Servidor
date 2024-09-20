const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Categoria = sequelize.define('Categoria', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
});

module.exports = Categoria;
