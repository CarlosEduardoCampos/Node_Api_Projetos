// Criando Rotas usando Express
const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('CFB CURSOS');
});

server.listen(3000, () => console.log('Servidor rodando'));
