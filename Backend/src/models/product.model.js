const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    brand: { type: String, required: true },
    color: { type: String, required: true },
    gender: { type: String, required: true },
    material: { type: String, required: true },
    sale: { type: String, required: true }
})

const Product = mongoose.model("product", productSchema);
module.exports = Product;