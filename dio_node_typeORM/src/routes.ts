import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import {User} from "./services/User";
import {MysqlDataSouce} from "./database/index";

const router = Router();
const createUser = new CreateUserController();

router.route('/user/:id?')
    // Lista os usuarios
    .get( async (req:Request, res:Response) => {
        const users = await MysqlDataSouce.getRepository(User).find()
        res.json(users)
    })
    .post(createUser.handle);

export {router};
