const path = require('path');
const express = require('express');

const adminData = require('./admin');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop',  {
    products: products,
    path: '/',
    pageTitle: "Shop",
    hasProducts: true,
  });
});

module.exports = router;
