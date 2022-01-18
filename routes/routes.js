const express = require('express')
const userController = require ('../controllers/userController')
const productControllers = require ('../controllers/productControllers')
const filesController = require('../controllers/filesController')
const passport = require("../config/passport")
const Router = require('express').Router();
const validator = require("../controllers/validator")

const {getAllUsers, addNewUser, logInUser, deleteUser, editUser, verifyToken} = userController
const {getProducts, loadProduct, getOneProduct, deleteProduct, modifyProduct, searchProducts} = productControllers
const {getFiles, uploadFile, deleteFile} = filesController

Router.route("/products")
.get(getProducts)
.post(loadProduct)

Router.route("/products/:string")
.get(searchProducts)

Router.route("/product/:id")
.get(getOneProduct)
.delete(deleteProduct)
.put(modifyProduct)

Router.route("/users")
.get(getAllUsers)

Router.route("/user/signup")
.post(validator,addNewUser)

Router.route("/user/signin")
.post(logInUser)

Router.route("/user/:id")
.delete(deleteUser)
.put(editUser)

 //files upload 

Router.route('/files/upload')
.post(uploadFile, getFiles)

Router.route('/files/fileList')
.post(getFiles)

Router.route('/files/delete:id')
.post(deleteFile)



Router.route ("/verifyToken")
.get(
    passport.authenticate('jwt', {session:false}),
    verifyToken
    )

module.exports = Router