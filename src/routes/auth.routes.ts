import { Router } from "express";
const router = Router();
import { TokenValidation } from '../libs/verifyToken'

import {
    sigIn
} from "../controllers/auth.controller";

router.post("/auth", sigIn);


export default router;
