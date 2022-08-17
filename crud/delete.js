require('../connection');
const Product = require('../models/product')

async function main(){
    //deleteMany borra todos los documentos que coinciden con los criterios de busqueda
    //const products = await Product.deleteMany({name:'laptop'});
    //Busca todos los datos y borra el primero
    //const products = await Product.deleteOne({name:'laptop'});
    //Busca solo un dato y lo borra
    //const products = await Product.findOneAndDelete({name:'laptop'});
    //Busca por ID y borra
    const products = await Product.findByIdAndDelete('6270655fa56db0811433206c');
    console.log(products);
}

main()