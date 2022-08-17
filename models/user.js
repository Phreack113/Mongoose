const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: String,
    data: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('User', userSchema);