import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import dotenv from 'dotenv'

dotenv.config();

import userRoutes from './routes/user.routes'

import ProductRoutes from './routes/product.routes'

import AuthRoutes from './routes/auth.routes'

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);
app.use(ProductRoutes);
app.use(AuthRoutes);


app.listen(3000);
console.log('Server on port', 3000);