const prisma = require('../database/prisma');

async function shoppingCartRoutes(router){
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

  router.post('/shoppingCart', async (req, res) => {
    const {productId} = req.body
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }
    
    try {
      const product = await prisma.shoppingCart.findUnique({
        where: {
          id: productId
        },

      });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      
      const cartItem = await prisma.shoppingCart.create({
        data:{
          productId,
          isShoppingCart: true
        }
      })

      return res.status(200).send(cartItem);
    } catch (error) {
      console.error('Error fetching shopping cart:', error);
      return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  });

  // Rota para listar todos os Produtos no Carrinho de Compras
  router.get('/shoppingCart', async (req, res) => {
    try {
      const shoppingCart = await prisma.shoppingCart.findMany({
        where: {
          isShoppingCart: true,
        },
      });
      return res.status(200).send(shoppingCart);
    } catch (error) {
      console.error('Error fetching shopping cart:', error);
      return res.status(500).send({ error: 'Failed to list all shopping cart' });
    }
  });

  // Rota para excluir um produto favoritado
  router.delete('/favorites/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const deletedFavorite = await prisma.products.update({
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
      const deletedCartItem = await prisma.products.update({
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