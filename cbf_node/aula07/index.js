const express = require('express');
const { route } = require('./rotas');
const rotas = require('./rotas');
const app = express();

app.use('/', rotas);
app.get('*', (req, res) => res.send('CFB Cursos'));

app.listen(3000, () => console.log('Server Rodando ...'))