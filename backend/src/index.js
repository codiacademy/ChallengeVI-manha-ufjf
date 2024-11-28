const express = require('express');
const router = require('./routes/routes');
const dotenv = require('dotenv');


// Load environment variables (if using .env)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

app.use(router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app

//use cors to commmunicate with front end
//app.use(cors())
//still have to download cors
//what is cors????