import express, {Request, Response} from 'express';
import {router} from './routes';

const app = express();
const porta = 5000;

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