const { PrismaClientRustPanicError } = require('@prisma/client/runtime/library');
const prisma = require('../database/prisma');

async function shoppingCartRoutes(router){
  
  // Criando rota post shoppingCart
  router.post('/shoppingCart', async (req, res) => {
    const {userId, productId, isFavorite, isShoppingCart} = req.body;
    
    //Validate incoming data
    if ( !userId || !productId) {
      return res.status(400).json({ message: 'UserId, productId are required.' });
    }
    await prisma.shoppingCart.create({ 
      data: {
        userId,
        productId,
        isFavorite,
        isShoppingCart,
      }
    });
    return res.status(201).send("Product added to shoppingCart.")
  });
  
  // Criando rota post favorites
  router.post('/favorites', async (req, res) => {
    const {userId, productId, isFavorite, isShoppingCart} = req.body;
    
    //Validate incoming data
    if ( !userId || !productId) {
      return res.status(400).json({ message: 'UserId, productId are required.' });
    }
    await prisma.shoppingCart.create({ 
      data: {
        userId,
        productId,
        isFavorite,
        isShoppingCart,
      }
    });
    return res.status(201).send("Product added to favorites.")
  });
  
  // Rota para listar todos os produtos Favoritados
  router.get('/favorites', async (req, res) => {
    try {
      const favorites = await prisma.products.findMany({
        where: {
          isFavorite: true,
        },
      });
      return res.status(200).send(favorites);
    } catch (error) {
      console.error('Error fetching favorites:', error);
      return res.status(500).send({ error: 'Failed to list all favorites' });
    }
  });
  
  // Get All Products in Shopping Cart
  router.get('/shoppingCart', async (req, res) => {
    try {
      const shoppingCartItems = await prisma.shoppingCart.findMany({
        where: {
          isShoppingCart: true,
        },
        include: {
          product: true, // Assuming a relation exists to fetch product details
        },
      });

      return res.status(200).json(shoppingCartItems);
    } catch (error) {
      console.error('Error fetching shopping cart:', error);
      return res.status(500).json({ error: 'Failed to list all shopping cart items', details: error.message });
    }
  });

  // Rota para excluir um produto favoritado
  router.delete('/favorites/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const deletedFavorite = await prisma.shoppingCart.update({
        where: { id: Number(id) },
        data: { isFavorite: false },
      });

      return res.status(200).send(deletedFavorite);
      
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Failed to remove product from favorites' });
    }
  });

  // Rota para excluir um produto do carrinho
  router.delete('/shoppingCart/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const deletedCartItem = await prisma.shoppingCart.update({
        where: { id: Number(id) },
        data: { isShoppingCart: false },
      });

      return res.status(200).send(deletedCartItem);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Failed to remove product from shopping cart' });
    }
  });

}

module.exports = shoppingCartRoutes
