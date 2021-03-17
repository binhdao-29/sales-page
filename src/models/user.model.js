const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email : String,
    password : String,
    phoneNumber : String
});

const User = mongoose.model('User', userSchema, 'users');
module.exports = User;