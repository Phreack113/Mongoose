const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mywebstore';

const db = mongoose.connection;

mongoose.connect(uri); //Si la base de datos en este caso 'mywebstore' no existe no importa, mongoose lo crea por nosotros
// En el caso donde tengamos que conectarnos a otra base de datos que sea diferente a localhost, lo colocamos ahi

//Con esta función puedo escuchar algunos eventos, en este caso el evento OPEN, ver documentación en pagina oficial
//Este codigo se ejecuta solo una vez. Se usa el Once en lugar del On.
db.once('open', _ => {
    console.log('Data base is connecting to:', uri);
}) 

//En caso de error con el evento 'error' manejamos el error
db.on('error', err => {
    console.log(err);
})