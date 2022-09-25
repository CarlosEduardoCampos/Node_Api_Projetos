
let express = require('express');
let consign = require('consign')

let app = express()

/* Configura middlewares*/
app.use(express.json())

/* Faz o autoload das rotas, dos models e do controllers para o objeto app */
consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
.into(app);

module.exports = app;