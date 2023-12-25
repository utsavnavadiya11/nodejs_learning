const express = require('express');
const path= require('path');
const rootDir = require('./utils/path');

const router = express.Router();

//keep the home route at the end becoz it willl match all the incoming requests..
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'shop.html'));
});

module.exports = router;