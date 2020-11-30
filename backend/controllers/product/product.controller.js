const Product = require("../../models/product/product.model");

exports.getProducts = async (req, res, next) => {
  const productDocs = await Product.find();

  return res.status(200).json({
    status: "succes",
    results: productDocs.length,
    data: {
      products: productDocs
    }
  })
}

exports.createProduct = async(req, res, next) => {
  const {name, price, route, imgSrc, intro} = req.body;
  console.log({name})

  const newProductDoc = await Product.create({name, price, route, imgSrc, intro});

  return res.status(201).json({
    status: "success",
    data: {
      product: newProductDoc,
    }
  })
}