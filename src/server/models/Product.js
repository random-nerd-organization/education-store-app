const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true },
    description: { type: mongoose.Schema.Types.String, required: true },
    inStock: { type: mongoose.Schema.Types.Number, required: true },
    productSales: { type: mongoose.Schema.Types.Number, required: true },
    color: { type: mongoose.Schema.Types.String, required: true },
    imgUrl: { type: mongoose.Schema.Types.String, required: true },
    origin: { type: mongoose.Schema.Types.String, required: true },
    productMaterial: { type: mongoose.Schema.Types.String, required: true },
    size: { type: mongoose.Schema.Types.String, required: true },
    categories: [{ type: mongoose.Schema.Types.String }]
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;