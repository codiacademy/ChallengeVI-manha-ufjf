const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')
const sessionRoutes = require('./sessionRoutes')
const productsRoutes = require('./productsRoutes')
const shoppingCartRoutes = require('./shoppingCartRoutes')

userRoutes(router)
sessionRoutes(router)
productsRoutes(router)
shoppingCartRoutes(router)


// What do I do with this one??
router.get('/', (req, res) =>{
    res.send('Hello World')
})



module.exports = router;