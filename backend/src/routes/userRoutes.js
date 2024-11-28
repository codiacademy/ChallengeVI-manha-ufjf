const prisma = require('../database/prisma');
const bcrypt = require('bcryptjs');
require('dotenv').config();

//register user POST
async function userRoutes (router){
    router.post('/register', async (req, res) => {
        const { email, password, firstName, lastName, phone } = req.body;
    
        // Validate incoming data
        if ( !firstName || !lastName || !password || !email) {
            return res.status(400).json({ message: 'Email, password, and first name and last name are required.' });
        }
    
        //check if user email is already in use
        try {
            const existingUser = await prisma.users.findUnique({
                where: { email },
            });
            if (existingUser) {
                return res.status(400).json({ message: 'Email is already registered' });
            }
        //hash password    
        const hashedPassword = await bcrypt.hash(password, 10);    
        //add user    
        const newUser = await prisma.users.create({
            data: {
                email, 
                password_hash: hashedPassword, 
                firstName, 
                lastName, 
                phone
            }
    
        })
    
        res.status(201).json({message: 'User registered successfully', id: newUser.id})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user'})
    }        
    });

}

module.exports = userRoutes

