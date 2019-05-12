const express = require('express');
const ProductsManager = require('../services/products-manager.js');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const productService = new ProductsManager();
        const products = await productService.getProducts();
        res.status(200).send(products);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/top20', async (req, res, next) => {
    try {
        const productService = new ProductsManager();
        const products = await productService.getTop20Products();
        res.status(200).send(products);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const productService = new ProductsManager();
        const product = await productService.getProductById(req.params.id);
        res.status(200).send(product);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        // const products = req.body.products;
        // const productService = new ProductsService();
        // const data = await productService.addProducts(products);
        // res.status(200).send(data);
    } catch (err) {
        // res.status(400).send(err);
    }
});


module.exports = router;
