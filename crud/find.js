require('../connection');
const Product = require('../models/product')

async function main(){
    const products = await Product.find();
    console.log(products);
}

main()
