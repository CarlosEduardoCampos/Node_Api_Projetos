require('dotenv').config();
// FrameWork
const express = require('express');
const app = express();

// Dados do corpo 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//
const port = process.env.SERVER_PORT;

// Rotas padrão para a Api
app.get('/', (req, res) =>{
    res.contentType('.html');
    res.send('<h1> API de Usuarios DIO </h1>')
    res.status(200);
});

// Rotas de requisição da API
const userRoute = require('./src/routes/user');
//
userRoute(app);

// Inicia o servidor
app.listen(port, () => console.log(`127.0.0.1:${port}`));
