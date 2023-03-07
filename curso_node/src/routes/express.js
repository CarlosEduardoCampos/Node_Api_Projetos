const express = require('express');
const UserModel = require('../models/user_model');
const app = express();
const port = 8080;

app.use(express.json());
app.use((req, res, next) =>
{ 
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers['content-type']}`);
    console.log(`Date : ${new Date()}`);
    next();
});

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.get('/views/users', async (req, res) =>
{
    const users = await UserModel.find({});
    res.render('index', {users});
});

// Busca um usuario especifico no banco pelo id
app.get('/users/:id', async (req, res) => 
{
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    }
    catch (error)
    {
        res.status(500).send(error.message);
    }
});

// Lista todos os usuarios
app.get('/users', async (req,res) =>
{
    try{
        const users = await UserModel.find({});
        res.status(200).json(users)
    }
    catch(error)
    {
        res.status(500).send(error.message);
    }
});

// Cria um novo usuario no banco de dados
app.post('/users', async (req,res) =>
{
    try{
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    }
    catch (error)
    {
        res.status(500).send(error.message);
    }
});

// Atualiza parcialmente um usuario
app.patch('/users/:id', async (req, res) =>
{
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).send(user);
    } 
    catch (error) 
    {
        res.status(500).send(error.menssege);
    }
});

// Apaga um usuario do banco
app.delete('/users/:id', async (req, res) =>
{
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);
        res.status(200).send(user);
    } 
    catch (error)
    {
        res.status(500).send(error.menssege);
    }
});

app.listen(port,() => console.log(`Rota Express http://localhost:${port}/views/users`));