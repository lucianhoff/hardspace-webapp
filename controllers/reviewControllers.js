const Product = require("../models/Product");

const reviewControllers = {
  newReview: async (req, res) => {
    const { productId, reviewId } = req.body;

    try {
      const newReview = await Product.findByIdAndUpdate(
        { _id: productId },
        {
          $push: {
            reviews: {
              userId: req.user._id,
              reviewId: reviewId,
            },
          },
        },
        { new: true }
      );
      res.json({ succss: true, response: newReview, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
  deleteReview: async (req, res) => {
    const { productId, reviewId } = req.body;

    try {
      const deleteReview = await Product.findOneAndUpdate(
        { _id: productId },
        {
          $pull: {
            reviews: { _id: reviewId },
          },
        },
        { new: true }
      );
      res.json({ success: true, response: deleteReview, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
  editReview: async (req, res) => {
      const { reviewId, review } = req.body;
      
      try {
          let editReview = await Product.findOneAndUpdate(
              { "reviews._id": reviewId },
              {
                  $set: {
                        "reviews.$.review": review
                  }
              },
              { new: true }
          )
          res.json({success: true, response: editReview, error: null})
      } catch (e) {
          res.json({success: false, response: null, error: e.message})
      }

  }
};

module.exports = reviewControllers;