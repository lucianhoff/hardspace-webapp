const express = require("express");
const userController = require("../controllers/userController");
const productControllers = require("../controllers/productControllers");
const passport = require("../config/passport");
const Router = require("express").Router();
const validator = require("../controllers/validator");
const reviewControllers = require("../controllers/reviewControllers");
const { addNewUser, logInUser, deleteUser, editUser, verifyToken } =
  userController;
const {
  getProducts,
  loadProduct,
  getOneProduct,
  deleteProduct,
  modifyProduct,
  searchProducts,
} = productControllers;

const { newReview, editReview, deleteReview } = reviewControllers;

Router.route("/products").get(getProducts).post(loadProduct);

Router.route("/products/:string").get(searchProducts);

Router.route("/product/:id")
  .get(getOneProduct)
  .delete(deleteProduct)
  .put(modifyProduct);

Router.route("/user/signup").post(validator, addNewUser);

Router.route("/user/signin").post(logInUser);

Router.route("/user/:id").delete(deleteUser).put(editUser);

Router.route("/verifyToken").get(
  passport.authenticate("jwt", { session: false }),
  verifyToken
);

//reviews

Router.route("/reviews")
.post(newReview)
.put(editReview)
.delete(deleteReview)

module.exports = Router;
