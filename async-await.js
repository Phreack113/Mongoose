require('./connection');
const Product = require('./models/product')

//Formas nuevas de escribir códogo asincrono en JS async-await
async function main(){
    const product = new Product ({
        name: 'keyboard',
        description: 'back light keyboard',
        price: 520.99
    })
    
    const productSaved = await product.save();
    return productSaved;
}

//Forma nueva de escribir código asincrono en JS con PROMESAS con Then y con Catch
main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err))  
