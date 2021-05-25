import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import jwt from 'jsonwebtoken';

export const sigIn = async (req: Request, res: Response) => {
    
    const user = await getRepository(User).findOne({
        where:{ 
          username: req.body.username
        }
      });

    if (!user) return res.status(400).json({msg : 'User invalido'});
    
    const dataUser = JSON.stringify(user);
    const dataUserJson = JSON.parse(dataUser);
    
    const correctPassword = await User.validatePassword(req.body.password , dataUserJson.password);
    if (!correctPassword) return res.status(400).json({msg : 'password invalido'});

    // Create a Token
    const token: string = jwt.sign({ _id: dataUserJson.id }, process.env['TOKEN_SECRET'] || '');
    res.header('auth-token', token).json({
      token  : token,
      dataUser : dataUserJson
    });
};

