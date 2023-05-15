const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts); 
        //above get route can be the same route as POST as long as we have a different http verb
    app.get('/api/product/:id', ProductController.getProduct);
}