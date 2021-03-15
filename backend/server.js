const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//instantiate my app
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Importing all of the routes into server.js file 
const productRoute = require('./routes/products');

app.use("/product", productRoute);

//communicate with the app on a specific port 
// app.listen(5019);

//Deploy on a random port number 
const server = app.listen(5019, () => {
    console.log(`Server has successfully started on port number: ${server.address().port}`);
})


console.log("Hey Lets get started");