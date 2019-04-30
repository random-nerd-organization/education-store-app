
const ProductsService = require('../src/server/services/products-service');

test('Get products from products service', async () => {
    expect.assertions(2);

    const productsService = new ProductsService();
    const products = await productsService.getProducts();

    expect(products.length).toBe(40);
    expect(products.length).not.toBe(41);
});

test('Test object structure of the response', async () => {
    const productsService = new ProductsService();
    const products = await productsService.getProducts();

    expect.assertions(products.length);

    products.forEach(p => {
        expect(Object.keys(p))
            .toEqual([
                'product',
                'productName',
                'price',
                'productAdjective',
                'productMaterial',
                'department'
            ]);
    });
});

test('No falsy values from response', async () => {
    const productsService = new ProductsService();
    const products = await productsService.getProducts();

    // Jest require to tell him how many tests we want to 
    // perform if asynchronous functions are used in the test
    expect.assertions(products.length * Object.keys(products[0]).length * 2);

    products.forEach(p => {
        const {
            product,
            productName,
            price,
            productAdjective,
            productMaterial,
            department
        } = p;

        [
            product,
            productName,
            price,
            productAdjective,
            productMaterial,
            department
        ].forEach(fieldValue => {
            expect(typeof fieldValue).toBe(typeof '');
            expect(fieldValue.length).toBeGreaterThan(0);
        })
    });
});