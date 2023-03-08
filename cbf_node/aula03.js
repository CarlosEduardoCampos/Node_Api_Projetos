// Criando rotas no servidor node
const http = require('http');
const url = require('url');
const port = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req,res) =>
{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(req.url);

    // Recebe valores na url '/?nome=bruno&canal=cbf+cursos'
    const p = url.parse(req.url, true).query;
    res.write('</br>' + p.nome);
    res.write('</br>' + p.canal);
    /*
    if (req.url == '/') 
    {
        res.write('<h1> Seja bem vindo </h1>');
    }
    else if(req.url == '/canal')
    {
        res.write('<h1> CFB Cursos </h1>');
    }
    else if(req.url == '/curso')
    {
        res.write('<h1> Curso de Node </h1>');
    }
    */
    res.end();
});

servidor.listen(port, host, () => {console.log(`Servidor rodando ${host}:${port}`)});