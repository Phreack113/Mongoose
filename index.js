require('./connection');

const Product = require('./models/product')

const product = new Product ({
    name: 'laptop',
    description: 'macbook pro',
    price: 1300.99
})

product.save((err, document)=>{
    if (err) console.log(err);
    console.log(document);
})

console.log(product);