const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number
    },
    route: {
      type: String
    },
    imgSrc: {
      type: String
    },
    intro: {
      type: String
    },
    createdAt: {
      type: Date,
      default: new Date(),
    }
  }
)

const Product = mongoose.model("Product", productSchema);

module.exports = Product;