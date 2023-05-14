const Product = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//CREATE PRODUCT WITH MONGOOSE'S CREATE METHOD
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(error => response.json(error));
}