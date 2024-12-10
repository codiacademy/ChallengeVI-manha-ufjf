const { PrismaClientRustPanicError } = require('@prisma/client/runtime/library');
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

// Add Product to Shopping Cart
router.post('/shoppingCart', async (req, res) => {
  const { productId, userId, isFavorite, isShoppingCart } = req.body;

  // Validate required fields
  if (!productId || !userId) {
    return res.status(400).json({ error: 'Product ID and User ID are required' });
  }

  try {
    // Check if the product is already in the user's shopping cart
    const existingCartItem = await prisma.shoppingCart.findFirst({
      where: {
        productId,
        userId,
      },
    });

    if (existingCartItem) {
      return res.status(409).json({ message: 'Product already in the shopping cart' });
    }

    // Create new shopping cart entry
    const newShoppingCart = await prisma.shoppingCart.create({
      data: {
        productId,
        userId,
        isFavorite: isFavorite || false,
        isShoppingCart: isShoppingCart || true,
      },
    });

    return res.status(201).json({
      message: 'Product added to the shopping cart',
      shoppingCartId: newShoppingCart.id,
    });
  } catch (error) {
    console.error('Error adding product to shopping cart:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
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