const prisma = require('../database/prisma');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken')

async function sessionRoutes(router){
    //login POST 
    router.post('/login', async (req, res) => {
        const { email, password } = req.body;

    // check if email and password were provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }
        try{
            //check if user exists
            const users = await prisma.users.findUnique({
                where: { email },
            });

            //if user does not exist
            if (!users){
                return res.status(404).json({ message: 'User not found.' });
            }

            try {
                //compare hashed password with the provided password
                const isPasswordCorrect = await bcrypt.compare(password, users.password_hash);

                if (!isPasswordCorrect) {
                    return res.status(401).json({ message: 'Invalid credential.' });
                }
            } catch (bcryptError) {
                console.error('Bcrypt error: ', bcryptError);
                return res.status(500).json({ message: 'Error validating password.' });
            }


            //create token if credentials are valid
            const token = jwt.sign(
                { userId: users.userId, email: users.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.status(200).json({message: 'Login successful', token});    
        } catch (error) {
            console.error('Error during login: ', error);
            return res.status(500).json({message: 'Server error during login'});
        }
    })
}

module.exports = sessionRoutes
