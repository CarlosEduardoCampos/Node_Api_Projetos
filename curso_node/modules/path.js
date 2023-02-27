const path = require("path");

// Nome do Arquivo atual:
console.log(path.basename(__filename)); 

// Nome do Diretório atual:
console.log(path.dirname(__filename));

// Extensão do arquivo 
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminho de arquivos 
console.log(path.join(__dirname, "test", "teste.html"));

