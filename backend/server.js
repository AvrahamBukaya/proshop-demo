import express from 'express';
import products from './data/products.js';

const port = process.env.PORT || 8000;
const app_mode = process.env.NODE_ENV;

const app = express();

app.get('.', (req, res) => {
  res.send('Server Running.......');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const { id: productId } = req.params;
  const product = products.find((p) => p._id === productId);

  res.status(200).json(product);
});

app.listen(port, () => {
  console.log(`Server on ${app_mode} mode,  running on port: ${port}`);
});
