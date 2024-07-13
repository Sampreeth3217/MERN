const express = require('express');
const ProductsApp = express.Router();

// Middleware
ProductsApp.use(express.json());

// Test data
let productList = [
  { id: 1, name: 'Product_1' },
  { id: 2, name: 'Product_2' }
];

ProductsApp.get('/products', (req, res) => {
  res.send({
    message: 'productsList',
    payload: productList
  });
});

ProductsApp.get('/products/:id', (req, res) => {
  let id = req.params.id;
  let product = productList.find(product => product.id == id);
  if (product) {
    res.send({
      message: 'productDetails',
      payload: product
    });
  } else {
    res.send({ message: 'product not found' });
  }
});

ProductsApp.post('/products', (req, res) => {
  let product = req.body;
  productList.push(product);
  res.send({
    message: 'product added successfully',
    payload: productList
  });
});

ProductsApp.put('/products', (req, res) => {
  let product = req.body;
  let id = product.id;
  let index = productList.findIndex(product => product.id == id);
  if (index == -1) {
    res.send({ message: 'product not found' });
  } else {
    productList[index] = product;
    res.send({
      message: 'product updated successfully',
      payload: productList
    });
  }
});

ProductsApp.delete('/products', (req, res) => {
  let product = req.body;
  let id = product.id;
  let index = productList.findIndex(product => product.id == id);
  if (index == -1) {
    res.send({ message: 'product not found' });
  } else {
    productList.splice(index, 1);
    res.send({
      message: 'product deleted successfully',
      payload: productList
    });
  }
});

module.exports = ProductsApp;
