const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description : String,
    imgUrl : String
  });

const Product = mongoose.model('Product', productSchema, 'products');
module.exports = Product;