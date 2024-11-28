const express = require('express');
const router = require('./routes/routes');
const dotenv = require('dotenv');
const cors = require('cors');


// Load environment variables (if using .env)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());
//communicate with frontend
app.use(cors());

app.use(router);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app
