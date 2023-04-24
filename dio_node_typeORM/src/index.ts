import express, {Request, Response} from 'express';
import {MysqlDataSouce} from "./database/index";
import {router} from './routes';

// Connection init
MysqlDataSouce.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization:", err)
});
// Connection end

const app = express();
const porta = 5000;

// Configura para receber o modelo json
app.use(express.json());

//>>> Api RestFull:
//
// C - Create - PUT    - Criar Usuario
// R - Read   - GET    - Selecionar Usuario
// U - Update - PATCH  - Editar Usuario
// D - Delete - dELETE - Deletar Usuario
//
// >>> Rotas: 
app.use(router);

// Escutado o servidor da API
app.listen(porta, () => console.log('127.0.0.1:'+porta));