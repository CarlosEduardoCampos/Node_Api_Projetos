const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cusonodejs0.zdma88u.mongodb.net/database?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
    mongoose.set('strictQuery', true)
    await mongoose.connect(uri, (error) => {
            if (error){
                return console.log('Ocorreu um erro ao se conectar como banco: ', error);
            }
            return console.log('Conexão ao banco relizado com sucesso!');
        }
    );
}

module.exports = connectToDatabase;
