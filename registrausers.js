require('./connection');
const User = require('./models/user')

async function main(){
    const userOne = new User ({
        username: 'PepeGrillo',
        password: '123abc',
    })
    await userOne.save();
    
    const userTwo = new User ({
        username: 'Spertt',
        password: 'qwqwqw',
    })
    await userTwo.save();
}

main()
