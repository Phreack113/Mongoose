require('../connection');
const Product = require('../models/product')

const createProduct = async () => {
    const laptopOne = new Product({
        name: 'laptop',
        description: 'HP Pavilon'
    })
    await laptopOne.save();
    
    const laptopTwo = new Product({
        name: 'laptop',
        description: 'Dell Inspiron 15'
    })
    await laptopTwo.save();
    
}

createProduct();