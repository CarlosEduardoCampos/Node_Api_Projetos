import { Request, Response } from "express";

class CreateUserController{
    hadle(req: Request, res: Response){
        return res.json(
            [
                {nome: 'João'},
                {nome: 'Maria'},
                {nome: 'Kate'}
            ]
        );
    }
};

export {CreateUserController};