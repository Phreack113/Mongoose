// Vamos a crear es Schema de los productos

//Utilizo destructuring, significa que me voy a traer una propiedad de un objeto, en lugar de requerir el objeto completo
const { Schema, model } = require('mongoose');

//Podemos ver en la pagina los schema types para ver que tipo de datos soporta mongoose/mongodb
//El Schema es para mongoose
const productSchema = new Schema({
    name: {
        type: String
    },
    description: String,
    price: {
        type: Number,
        default: 0
    }
});

//El modelo es para que podamos interactuar con la base de datos
//Procedemos a crea un nuevo modelo a partir de ese Schema 'productSchema'

module.exports = model('Product', productSchema);