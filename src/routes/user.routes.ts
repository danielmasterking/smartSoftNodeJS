import { Router } from "express";
const router = Router();
import { TokenValidation } from '../libs/verifyToken'

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller";

router.get("/users", TokenValidation , getUsers);
router.get("/users/:id", TokenValidation , getUser);
router.post("/users", createUser);
router.put("/users/:id", TokenValidation , updateUser);
router.delete("/users/:id", TokenValidation , deleteUser);

export default router;
