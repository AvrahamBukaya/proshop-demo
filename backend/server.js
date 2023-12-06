import express from 'express';
import products from './data/products.js';
import cors from 'cors';
import productRouter from './routes/prodcutRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

import connectDB from './config/db.js';
const port = process.env.PORT || 8000;
const app_mode = process.env.NODE_ENV;

connectDB();
const app = express();
app.use(cors());

app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Server Running.......');
});

app.get('/api/products/:id', (req, res) => {
  const { id: productId } = req.params;
  const product = products.find((p) => p._id === productId);

  res.status(200).json(product);
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server on ${app_mode} mode,  running on port: ${port}`);
});
