const express = require('express');
const router = require('./routes/routes');
const dotenv = require('dotenv');
const cors = require('cors');
const prisma = require('./database/prisma'); // Movi a importação do prisma para o início

// Load environment variables (if using .env)
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Communicate with frontend
app.use(cors());

// Roteamento
app.use(router);

// Conectar ao banco de dados
prisma.$connect()
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1); // Finaliza o processo se a conexão falhar
  });

module.exports = app;
