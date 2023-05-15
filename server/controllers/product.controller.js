const Product = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//BELOW IS USING MONGOOSE METHODS FOR CRUD:

//CREATE PRODUCT 
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(error => response.json(error));
}

//READ - GET ALL PRODUCTS
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products =>{
            console.log(products);
            response.json(products);
        })
        .catch(error => {
            console.log(error);
            response.json(error);
        })
}

//GET ONE PRODUCT
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(error => console.log(error))
}