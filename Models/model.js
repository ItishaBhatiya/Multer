const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:String,
    img:String,
    price:Number,
    ratings:[{}],
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;