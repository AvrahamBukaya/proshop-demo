import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.json(products);
  }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    }
    res.status(404).json({ error: "Product doesn't exist" });
  }),
);

export default router;
