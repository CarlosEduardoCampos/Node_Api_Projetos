const express = require('express');
const bodyParser = require('body-parser');
const UserModel = require('../models/user_model');
const app = express();
const port = 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
/*
app.use((req, res, next) =>
{ 
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers['content-type']}`);
    console.log(`Date : ${new Date()}`);
    next();
});*/

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.get('/views/users', async (req, res) =>
{
    const users = await UserModel.find({});
    res.render('index', {users});
});

// Pagina do formulario de edição do user
app.get('/user/editar/:id', async (req, res) =>
{
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id)
        res.render('editar', {user})
    } catch (error) {
        res.status(400).send(error.message);
    }

});

// Pagina do formulario de criação do user
app.get('/user', async (req, res) =>
{
    try {
        res.render('criar')
    } catch (error) {
        res.status(400).send(error.message);
    }

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
        res.redirect('/views/users')
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

// Atualiza totalmente um usuario
app.post('/users/:id', async (req, res) =>
{
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
        res.redirect('/views/users')
    } 
    catch (error) 
    {
        res.status(500).send(error.menssege);
    }
});

// Apaga um usuario do banco
app.get('/users/delete/:id', async (req, res) =>
{
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);
        res.redirect('/views/users')
    } 
    catch (error)
    {
        res.status(500).send(error.menssege);
    }
});

app.listen(port,() => console.log(`Rota Express http://localhost:${port}/views/users`));