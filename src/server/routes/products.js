const express = require('express');
const ProductsService = require('../services/products-service.js');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const productService = new ProductsService();
        const products = await productService.getProducts();
        res.status(200).send(products);
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;
