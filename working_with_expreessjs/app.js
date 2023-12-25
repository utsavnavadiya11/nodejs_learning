const express = require('express');
const path = require('path');
const rootDir = require('./utils/path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

// add parser to parse the request body..
app.use(bodyParser.urlencoded({extended: false}));

// app.use((req, res, next) => {
//     //next() have to be executed to go further.. all the logic inside next()
//     next();
// });

// app.use((req, res, next) => {
//     res.send('<h1> Hello, This is Utsav Navadiya</h1>');
// });

// app.use('/admin', adminRoutes); -> This will be executed only to those request containing /admin in url and will be treated ad /admin/xyz to all afeter this route
// this is route filtering..
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(5000);