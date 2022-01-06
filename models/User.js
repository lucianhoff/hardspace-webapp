const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    image: {type: String, required: true},
    birthday: {type: date},
    google: {type: boolean, default: false},
    facebook: {type: boolean, default: false},
    admin: {type: boolean, default: false},
    favourites:  [{
        productId: {type: mongoose.Types.ObjectId, ref: "product"},
    }],
})

const User = mongoose.model('product',userSchema)

module.exports = User
