import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUser = new CreateUserController();

router.route('/user/:id?')
    // Lista os usuarios
    .get((req:Request, res:Response) => {
        return res.send('ok');
    });

export {router};
