// sync.js
const sequelize = require('./config/config');
const Categoria = require('./models/Categoria');
const Product = require('./models/Product');

sequelize.sync({ force: true }).then(() => {
  console.log('Banco de dados sincronizado.');
}).catch((error) => {
  console.error('Erro ao sincronizar banco de dados:', error);
});
