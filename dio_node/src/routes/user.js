const fs = require('fs');
const {join} = require('path');

const filePath = join(__dirname, 'users.json');

// Busca todos o dados cadastrados 
const getUsers = () => {
    const data = fs.existsSync(filePath) // Testa se existe o arquivo
    ? fs.readFileSync(filePath)          // Existe o arquivo retorna o json do arquivo
    : [];                                // Não existe retorna json vazio
    try {
        return JSON.parse(data);
    }
    catch (error) {
        return [];
    }
}

// Cria um novo usuario
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'));

// Rota de acesso ao dados de usuarios
const userRoute = (app) => {
    app.route('/users/:id?')// Todas as rotas de /users com id opcional
        // Lista os usuarios cadastrados 
        .get((req, res) => {
            // Recebe os usuarios cadastrados
            const users = getUsers();

            res.contentType('application/json');
            res.send({users});
            res.status(200);
        })
        // Cadastra um novo usuario
        .post((req, res) => {
            // Recebe os usuarios cadstrados
            const users = getUsers();
            // Add mais um usuario
            users.push(req.body);

            // Salva a modificação no aquivo
            saveUser(users);

            // Retorna alista completa para ferificação
            res.contentType('application/json');
            res.send({users});
            res.status(201);
        })
        // Atualiza o usuario já cadastrado
        .put((req,res) => {
            // Recebe os usuarios cadstrados
            const users = getUsers();

            // Salva as modificações no arquivo
            saveUser(users.map(user => {
                if (user.id == req.params.id)
                {
                    return{
                        ...user,
                        ...req.body
                    }
                }
                return user
            }));
            //
            const newUsers = getUsers();

            // Retorna alista completa para ferificação
            res.contentType('application/json');
            res.send({newUsers});
            res.status(200);
        })
        // Apaga do aquivo um usuario
        .delete((req, res) => {
            // Recebe os usuarios cadstrados
            const users = getUsers();

            // Salva as modificações no arquivo
            saveUser(users.filter(user => user.id != req.params.id));
            //
            const newUsers = getUsers();

            // Retorna alista completa para ferificação
            res.contentType('application/json');
            res.send({newUsers});
            res.status(200);
        });
};

module.exports = userRoute;