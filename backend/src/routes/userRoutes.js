const prisma = require('../database/prisma');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// register user POST
async function userRoutes(router) {
    router.post('/register', async (req, res) => {
        const { email, password, firstName, lastName, phone } = req.body;

        // Validate incoming data
        if (!firstName || !lastName || !password || !email) {
            return res.status(400).json({ message: 'Email, password, first name, and last name are required.' });
        }

        try {
            // check if the user email is already in use
            const existingUser = await prisma.users.findUnique({
                where: { email },
            });
            if (existingUser) {
                return res.status(400).json({ message: 'Email is already registered.' });
            }

            // hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // add user
            const newUser = await prisma.users.create({
                data: {
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName,
                    phone,
                }
            });
            

         
            res.status(201).json({ message: 'User registered successfully', id: newUser.id });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error registering user'})
        }        
        });
        router.get('/user/:id', async (req, res) => {
            const { id } = req.params;
    
            try {
                // Buscar usuário pelo ID
                const user = await prisma.users.findUnique({
                    where: { id: Number(id) },
                });
    
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
    
                // Excluir a senha para não expor
                const { password, ...userData } = user;
    
                res.status(200).json(userData);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error fetching user' });
            }
        });

        router.get('/user', async (req, res) => {
            const { id } = req.params;
    
            try {
                // Buscar usuário pelo ID
                const user = await prisma.users.findMany();
    
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
    
                // Excluir a senha para não expor
                const { password, ...userData } = user;
    
                res.status(200).json(userData);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error fetching user' });
            }
        });
}

module.exports = userRoutes;
