const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('CFB Cursos');
});

app.get('/canal', (req, res) => {
    res.json({canal:'CFB Cursos'})
});

app.listen(3000, () => console.log('Servidor Rodando'));
