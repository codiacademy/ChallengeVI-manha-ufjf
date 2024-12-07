const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')
const sessionRoutes = require('./sessionRoutes')
const productsRoutes = require('./productsRoutes')

userRoutes(router)
sessionRoutes(router)
productsRoutes(router)
shoppingCartRouters(router)


// What do I do with this one??
router.get('/', (req, res) =>{
    res.send('Hello World')
})



module.exports = router;