// Módulo fs para manipular arquivos em node
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.appendFile('teste.html', 'Curso de Node - CFB Cursos', (err) => {
        if(err)throw err;
        console.log('Arquivo Criado');
    });
});

server.listen(process.env.PORT || 3000, () => console.log('Sevidor rodando'));
