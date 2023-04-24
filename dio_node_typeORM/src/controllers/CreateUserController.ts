import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
    handle(req: Request, res: Response)
    {
        const userService = new CreateUserService();

        const name = req.body.name;
        const email = req.body.email;

        if(name.length === 0 || email.length === 0)
        {
            return res.status(400).json({msg:'Dados invalidos tente novamente'});
        }

        const user = userService.execute({name, email});
        return res.status(201).json({user});
    }
};

export {CreateUserController};