import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (products) {
    res.status(200).json(products);
  }
  res.status(404).json(`There is No Records!`);
});

// @desc Fetch single product
// @route GET /api/product/:id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(200).json(product);
  }
  res.status(404);
  throw new Error('Resource not Found');
});

export { getAllProducts, getProductById };
