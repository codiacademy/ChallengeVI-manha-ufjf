const prisma = require('../database/prisma');


async function shoppingCartRoutes(router){
    router.get('/favorites', async (req, res) => {
        const favorites = await prisma.products.findMany({
            where: {
              isFavorite: true,
            },
          })
        
        return res.status(200).send(favorites)
    
    });

    router.get('/shoppingCart', async (req, res) => {
        const shoppingCart = await prisma.products.findMany({
            where: {
              isShoppingCart: true,
            },
          })
        
        return res.status(200).send(shoppingCart)
    
    });
}

module.exports = shoppingCartRoutes
