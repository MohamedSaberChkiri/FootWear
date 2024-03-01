// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    quantity: Number,
    price: Number,
    manufacturer: String,
    category: String,
    currentStock: Number,
    description: String,
    backgroundLink: String
});

module.exports = mongoose.model('Product', productSchema);
