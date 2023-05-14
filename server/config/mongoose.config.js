const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(error => console.log("Something went wrong when connecting to the database", error));