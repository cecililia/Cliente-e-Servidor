const { DataTypes } = require('sequelize'); // Importa o objeto DataTypes do Sequelize, que contém tipos de dados para definir os campos do modelo.
const sequelize = require('../config/config');// Importa a configuração do Sequelize, que contém a conexão com o banco de dados.

// Define um modelo chamado 'Product' que será associado à tabela 'Products' no banco de dado
const Product = sequelize.define('Product',  {
    name: {
      type: DataTypes.STRING, // Define o campo 'name' como do tipo STRING.
      allowNull: false, // Indica que este campo não pode ser nulo (obrigatório). 
    },
    description: {  // Define o campo 'description' como do tipo TEXT, permitindo mais caracteres.
        type: DataTypes.TEXT,
      },
      Preço: {
        type: DataTypes.DECIMAL(10, 2), // Define o campo 'preço' como DECIMAL com até 10 dígitos, sendo 2 após a vírgula.
        allowNull: false,
      },
      Estoque: {  //Este é o nome da coluna que representa a quantidade de produtos em estoque.
        type: DataTypes.INTEGER, //estamos definindo que o tipo de dado para a coluna Estoque será um número inteiro. Isso é apropriado, pois a quantidade de itens em estoque deve ser um valor inteiro (não pode ser negativo).
        allowNull: false,
        defaultValue: 0, // Essa propriedade define que, se nenhum valor for especificado para Estoque ao criar um novo registro, o valor padrão será 0.
      },
     
        
      }, {
      timestamps: true,
    });
    module.exports = Produc;
