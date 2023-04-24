import * as  dotenv from "dotenv";
dotenv.config();
//
import { DataSource } from "typeorm";

const MysqlDataSouce = new DataSource({
    type: "mysql",
    host: process.env.SERVER_HOST,
    port: parseInt(process.env.SERVER_PORT),
    username: process.env.SERVER_USER,
    password: process.env.SERVER_PASS,
    database: "teste",
    entities:["src/services/*.ts"]
});

export {MysqlDataSouce};