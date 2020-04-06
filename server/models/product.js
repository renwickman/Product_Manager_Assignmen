const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Title is required!"], 
        minlength: [4, "Title should be more than 4 characters"]
    },
    price: {
        type: String, 
        required: [true, "Price is required!"]
    },
    image: {
        type: String,
        minlength: 3, 
        maxlength: 350
    },

});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;