const express = require('express');
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');
const router = express.Router();

// Rota para registrar um novo Produto
router.post('/register', async (req, res) => {
  try {
    const { name, description, Preço } = req.body;



    // Criar o novo Produto
    const user = await User.create({
      name,
      description,
      Preço
    });

    res.status(201).json({ message: 'Produto cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar o Produto' });
  }
});

// Rota para login de produto
router.post('/login', async (req, res) => {
  try {
    const { description } = req.body;

    // Verificar se o usuário existe
    const user = await Product.findOne({ where: { description } });
    if (!user) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }



    // Gerar um token JWT
    const token = jwt.sign({ id: Product.id, role: Product.role }, 'secreta', { expiresIn: '1h' });

    res.json({ token, role: Product.role });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});


    



// Exportar as rotas e o middleware (se necessário)
module.exports =  router;
  