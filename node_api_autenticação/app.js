require("dotenv").config();

const express = require("express");
const mogoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// Models
const User = require("./models/User");

// Config JSON response
app.use(express.json());

// Open Route - Publick Route
app.get("/", (req, res) =>
{
    // res.contentType("Content-Type: application/json");
    res.status(200).json({ msg: "Bem vindo a nossa API!"});
});

// Private Route
app.get("/user/:id", checkToken, async (req, res) =>
{
    const id = req.params.id;
    // check if user exists
    const user = await User.findById(id, "-password");

    if(!user){
        // res.contentType("Content-Type: application/json");
        return res.status(404).json({ msg: "Error de autenticação" });
    }

    // res.contentType("Content-Type: application/json");
    return res.status(200).json({ msg: "Bem vindo a nossa API!", user });
});

function checkToken(req, res, next)
{
    console.log(req);
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({msg:"Acesso negado!"});
    }

    try {
        const secret = process.env.SECRET;

        jwt.verify(token, secret);

        next();
    }
    catch (error) {
        console.log(error);

        res.status(400).json({msg:"Touken inválido!"});
    }
}

// Register User
app.post("/auth/register", async (req, res) =>
{
    const { name, email, password, confirmpassword } = req.body;

    // Validations
    // 422 - O servidor entende a requisição mais os dados não estão corretos
    if (!name || !email || !password)
    {
        // res.contentType("Content-Type: application/json");
        return res.status(422).json({msg: "Falta informações! name, email e password são obrigatorios!",});
    }
    else if (password != confirmpassword)
    {
        // res.contentType("Content-Type: application/json");
        return res.status(422).json({ msg: "As senha não conferem!" });
    }

    // check if user exists
    const userExistis = await User.findOne({ email: email });

    if (userExistis)
    {
        // res.contentType("Content-Type: application/json");
        return res.status(422).json({ msg: "Email blockeado!" });
    }
    else {
        // Create password
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        // Create user
        const user = new User({name, email, password:passwordHash});

        try {
            await user.save();
            // 201 - O servidor recebe um novo registro
            // res.contentType("Content-Type: application/json");
            return res.status(201).json({ msg: "Um novo usuario foi cadastrado com sucesso!" });
        }
        catch (error) {
            console.log(error);
            // 500 - erro de comunicação com o servidor
            // res.contentType("Content-Type: application/json");
            return res.status(500).json({msg: "Acontecu um erro no servidor, tente novamente mais tarde!",});
        }
    }
});

// Login User
app.post("/auth/login", async (req, res) => {
    const {email, password} = req.body;

    // Validations
    // 422 - O servidor entende a requisição mais os dados não estão corretos
    if (!password || !email)
    {
        // res.contentType("Content-Type: application/json");
        return res.status(422).json({msg: "Falta informações! email e password são obrigatorios!",});
    }

    // check if user exists
    // 404 - Informação não encontrada
    const userExistis = await User.findOne({email: email});

    // check if password match
    const checkPassword = await bcrypt.compare(password, userExistis.password);

    if (!userExistis || !checkPassword){
        // res.contentType("Content-Type: application/json");
        return res.status(404).json({msg:"Dados incorretos verifique as informações!"});
    }

    try{
        const secret = process.env.SECRET;
        const token = jwt.sign(
            {
                id: userExistis._id,
            },
            secret,
        );

        // res.contentType("Content-Type: application/json");
        return res.status(200).json({msg:"O acesso foi libeirado", token});    
    }
    catch{
        console.log(error);

        // res.contentType("Content-Type: application/json");
        res.status(500).json({msg:"Erro no servidor tente novamente mais tarde!"});
    }
    
});

// Credenials
const dbUser = process.env.USERNAME_MONGODB;
const dbPass = process.env.PASSWORD_MONGODB;

// Data Base connect
mogoose.connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.8qc4vpn.mongodb.net/dataBase?retryWrites=true&w=majority`
)
.then(() => {
    app.listen(process.env.PORT_SERVER || 5000, () => console.log("Conectou ao banco!"));
})
.catch((err) => {
    console.log(err);
});
