import { Router } from "express";
const router = Router();
import { TokenValidation } from '../libs/verifyToken'

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct
} from "../controllers/product.controller";

router.get("/products", TokenValidation , getProducts);
router.get("/products/:id", TokenValidation , getProduct);
router.post("/products", TokenValidation ,createProduct);
router.put("/products/:id", TokenValidation ,updateProduct);
router.delete("/products/:id", TokenValidation, deleteProduct);
router.post("/products/search", TokenValidation, searchProduct);

export default router;
