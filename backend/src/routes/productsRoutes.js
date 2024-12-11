const prisma = require('../database/prisma');


async function productsRoutes(router){
    //Product Registration (POST /register)
    router.post('/products', async (req, res) => {
        const { name, description, price, imageURL, category } = req.body;

        //Validate incoming data
        if ( !name || !description || !price || !category) {
            return res.status(400).json({ message: 'Name, description, price, and category are required.' });
        }
        await prisma.products.create({ 
            data: {
                name, 
                description,
                price, 
                imageURL, 
                category
            }

        })
        return res.status(201).send("Product registered successfully")
                
    });

    // product GET
    //Add what happens if product is not found
    router.get('/products', async (req, res) => {
        const products = await prisma.products.findMany()
        
        return res.status(200).send(products)
    
    });

    router.get('/products/:id', async (req, res) => {
        const { id } = req.params;
    
        try {
          const productId = Number(id);
          
          if (isNaN(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
          }
    
          const product = await prisma.products.findUnique({
            where: { id: productId }
          });
    
          if (!product) {
            return res.status(404).json({ message: 'Product not found' });
          }
    
          return res.status(200).json(product);
    
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Error fetching product details' });
        }
      });
    
      
    router.get('/products/monitors', async (req, res) => {
        const products = await prisma.products.findMany({
            where: {
                category: "monitors"
            }
        });
        
        return res.status(200).send(products);
    });

    router.get('/products/keyboard', async (req, res) => {
        const products = await prisma.products.findMany({
            where: {
                category: "keyboard"
            }
        });
        
        return res.status(200).send(products);
    });
    
    router.get('/products/mouse', async (req, res) => {
        const products = await prisma.products.findMany({
            where: {
                category: "mouse"
            }
        });
        
        return res.status(200).send(products);
    });

    router.get('/products/computer', async (req, res) => {
        const products = await prisma.products.findMany({
            where: {
                category: "computer"
            }
        });
        
        return res.status(200).send(products);
    });

    router.get('/products/headset', async (req, res) => {
        const products = await prisma.products.findMany({
            where: {
                category: "headset"
            }
        });
        
        return res.status(200).send(products);
    });

    router.get('/products/random', async (req, res) => {
        try {
          const products = await prisma.products.findMany();
          const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 10); // Seleciona 10 produtos aleatórios
          return res.status(200).json(randomProducts);
        } catch (error) {
          console.error('Erro ao buscar produtos aleatórios:', error);
          return res.status(500).json({ message: 'Erro ao buscar produtos' });
        }
      });
      router.delete('/products', async (req, res) => {
        try {
          // Delete all products from the database
          const deletedProducts = await prisma.products.deleteMany();
      
          return res.status(200).send(deletedProducts);
        } catch (error) {
          console.error(error);
          return res.status(500).send({ error: 'Failed to delete all products' });
        }
      });
      
      

}

module.exports = productsRoutes