
const faker = require('faker');

module.exports = class ProductsService {
    getProducts() {
        return new Promise((resolve, reject) => {
            try {
                const products = [];
                for (let i = 0; i < 40; i += 1) {
                    products.push({
                        product: faker.commerce.product(),
                        productName: faker.commerce.productName(),
                        price: faker.commerce.price(),
                        productAdjective: faker.commerce.productAdjective(),
                        productMaterial: faker.commerce.productMaterial(),
                        department: faker.commerce.department()
                    });
                }
                resolve(products);
            } catch (err) {
                reject(err);
            }
        });
    }

}