require('../connection');
const User = require('../models/user')

async function updateUser(){
    const user = await User.updateOne({username:'Phreack113'},{password:'sigalavaca'}); //El promer objeto sirve para buscar, el segundo indica las propiedades a reemplazar
    console.log(user);
}

async function otherFunction(){
    const user = await User.findOneAndUpdate({username:'Phreack113'},{password:'sigalavaca'}); //El promer objeto sirve para buscar, el segundo indica las propiedades a reemplazar
    console.log(user);
}

//Otra forma de hacer un update es buscando el usuario y luego pisar el dato que querramos en este caso el password

const someFunction = async () => {
    const user = await User.findOne({username:'Phreack113'});
    console.log(user);
    user.password = 'newpass123';
    user.save();
}

//updateUser();
//someFunction();
otherFunction();