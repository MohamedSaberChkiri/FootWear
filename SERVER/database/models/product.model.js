const mongoose = require('mongoose');

// Define a Mongoose schema for the product
const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    quantity: Number,
    manufacturer: String,
    category: String,
    currentStock: Number,
    description: String,
    backgroundLink: String
});

// Create a Mongoose model using the product schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model
module.exports = Product;
