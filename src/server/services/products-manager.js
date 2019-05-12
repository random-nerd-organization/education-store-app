
const Product = require('../models/Product');

module.exports = class ProductsManager {
    async getProducts() {
        return await Product
            .find()
            .lean()
            .exec();
    }

    async addProducts(products) {
        return await Product
            .insertMany(products);
    }

    async getTop20Products() {
        return await Product
            .find()
            .sort({ productSales: -1 })
            .limit(20)
            .exec();
    }

    async getProductById(id) {
        return await Product
            .findById(id)
            .lean()
            .exec();
    }
}