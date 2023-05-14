const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()) //this allows cross-origin requests

//the following is to process POST requests with express:
app.use(express.json());  //allows JSON objects to be posted
app.use(express.urlencoded({extended: true})); //allows JSON objects with strings and arrays

require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(8000, () => {
    console.log("Listening on port 8000")
});