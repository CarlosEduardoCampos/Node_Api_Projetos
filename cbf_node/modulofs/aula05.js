// Módulo fs para manipular arquivos em node
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('site.html', (err, arq) => {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(arq);
        return res.end();
    });
});

server.listen(process.env.PORT || 3000, () => console.log('Sevidor rodando'));
