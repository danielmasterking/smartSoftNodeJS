import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import jwt from 'jsonwebtoken';

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(User).find();
  //let users = ['1' , '2'];
  return res.json(users);
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(User).findOne(req.params.id);
  return res.json(results);
};

export const createUser = async (
  req: Request,
  res: Response
) => {

  const userExists = await getRepository(User).findOne({
    where:{ 
      username: req.body.username
    }
  });
  
  
  if (userExists) return res.status(400).json('Email already exists');

  req.body.password = await User.encrypPassword(req.body.password);

  const newUser = await getRepository(User).create(req.body);
  
  const results = await getRepository(User).save(newUser);
  

  const dataUser = JSON.stringify(results);
  const dataUserJson = JSON.parse(dataUser);
  
  const token: string = jwt.sign({ _id: dataUserJson.id }, process.env['TOKEN_SECRET'] || '', {
    //expiresIn: 60 * 60 * 24
  });

  
  res.header('auth-token', token).json({
    token: token ,
    dataUser : dataUserJson
  });
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);
  if (user) {
    getRepository(User).merge(user, req.body);
    const results = await getRepository(User).save(user);
    return res.json(results);
  }

  return res.json({msg: 'Not user found'});
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(User).delete(req.params.id);
  return res.json(results);
};
