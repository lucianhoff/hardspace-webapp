const Product = require("../models/Product");

const reviewControllers = {
  newReview: async (req, res) => {
    const { productId, review, userId } = req.body;
    try {
      const userNewReview = await Product.findOneAndUpdate(
        { _id: productId },
        {
          $push: {
            reviews: {
              // userId: req.user._id,
              userId: userId, 
              review: review
            },
          },
        },
        { new: true }
      );
      res.json({ success: true, response: userNewReview, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
  deleteReview: async (req, res) => {
    const { productId, reviewId } = req.body;
    try {
      const reviewDelete = await Product.findOneAndUpdate(
        { _id: productId },
        {
          $pull: {
            reviews: { _id: reviewId },
          },
        },
        { new: true }
      );
      res.json({ success: true, response: reviewDelete, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
  editReview: async (req, res) => {
    const { reviewId, review } = req.body;
    try {
      let reviewEdit = await Product.findOneAndUpdate(
        { "reviews._id": reviewId },
        {
          $set: {
            "reviews.$.review": review,
          },
        },
        { new: true }
      );
      res.json({ success: true, response: reviewEdit, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  }
};

module.exports = reviewControllers;