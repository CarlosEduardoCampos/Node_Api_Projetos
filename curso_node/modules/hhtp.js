const http = require('http');
const port = 8080;

const server = http.createServer((req,res) =>{

    // Rotas de paginas do sevidor
    if (req.url === "/home")
    {
        // Define que sera enviado uma pagina html
        res.writeHead(200,{
            "Content-Type" : "text/html"
        });

        // Mostra o conteudo indicado
        res.end("<h1> home page </h1>");
    }

    if (req.url === "/users")
    {
        const users = [
            {
                name: "John Doe",
                email: "john@doe.com"
            },
            {
                name: "Jane Doe",
                email: "jane@doe.com"
            }
        ];

        // Define que sera enviado uma pagina json
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });

        // Mostra o conteudo indicado
        res.end(JSON.stringify(users))
    }
});

// Inicia o servidor na porta indicada
server.listen(port, () => console.log(`Rodando http://localhost:${port}/home`))