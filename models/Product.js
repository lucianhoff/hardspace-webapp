const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: {type:String, required: true},
    images: {type: Array, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    description: {type:String, required: true},
    imagesDescription: {type: Array},
    reviews:  [{
        title: {type: String},
        review: {type: String},
        value: {type: Number},
        userId: {type: mongoose.Types.ObjectId, ref: "user"},
    }],
})

const Product = mongoose.model('product',productSchema)

module.exports = Product