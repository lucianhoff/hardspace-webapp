const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    image: {type: String, required: true},
    birthday: {type: Date},
    google: {type: Boolean, default: false},
    facebook: {type: Boolean, default: false},
    admin: {type: Boolean, default: false},
    favourites:  [{
        productId: {type: mongoose.Types.ObjectId, ref: "product"},
    }],
})

const User = mongoose.model('user',userSchema)

module.exports = User
