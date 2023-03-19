const mongoose = require('mongoose');

// Estruturando banco de dados
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    confirmpassword:{
        type: String,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;