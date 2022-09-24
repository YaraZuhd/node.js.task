const express = require("express");
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use('/books',routes);

// Configuring body parser middleware
//app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));


