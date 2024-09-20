const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/config');
const productRoutes = require('./routes/productRoutes');
const categoriaroutes = require('./routes/categoriaroutes'); // Importa as rotas de categoria

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/Categoria', categoriaroutes); // Define a base das rotas para categorias

// Sincronizar o banco de dados
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => console.error('Erro ao sincronizar com o banco de dados:', error));
