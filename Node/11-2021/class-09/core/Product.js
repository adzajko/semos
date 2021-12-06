const { model } = require('mongoose');

const Product = model('products', {
  productName: { type: String, index: true, required: true },
  productPrice: Number,
  isInStock: Boolean,
  locationName: String,
});

module.exports = Product;
