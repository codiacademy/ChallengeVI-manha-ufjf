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
}

module.exports = productsRoutes
