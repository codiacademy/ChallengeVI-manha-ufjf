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

  // Rota para listar todos os Produtos no Carrinho de Compras
  router.get('/shoppingCart', async (req, res) => {
    try {
      const shoppingCart = await prisma.products.findMany({
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
