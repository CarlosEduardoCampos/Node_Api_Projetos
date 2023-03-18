require('dotenv').config();

const express = require('express');
const mogoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// Open Route - Publick Route
app.get('/', (req, res) => {
    res.contentType("Content-Type-json");
    res.status(200).json({msg:"Bem vindo a nossa API!"});
});

// Register User
app.post('/auth/register', async (req, res) => {
    const {name, email, password, confirmpassword} = req.body;

    // Validations
    // 422 - O servidor entende a requisição mais os dados não estão corretos
    if (!name){
        return req.status(422).json({msg:"O nome é obrigatorio!"});
    }
});

// Credenials
const dbUser = process.env.USERNAME_MONGODB;
const dbPass = process.env.PASSWORD_MONGODB;

// Data Base connect
mogoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.8qc4vpn.mongodb.net/dataBase?retryWrites=true&w=majority`)
.then(() =>{
    app.listen(process.env.PORT_SERVER || 5000, () => console.log('Conectou ao banco!'));
})
.catch((err) => {
    console.log(err);
});
