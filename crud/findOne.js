require('../connection');
const User = require('../models/user')

async function getUser(){
    const user = await User.findOne({username:'Phreack113'});
    console.log(user);
}

getUser();