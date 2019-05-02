module.exports = app => {
    const account = require('./account');
    const products = require('./products');
    
    app.use('/api/account', account);
    app.use('/api/products', products);
}