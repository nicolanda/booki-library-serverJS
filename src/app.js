import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/api.routes.js';
import cookieParser from 'cookie-parser';

export const app = express();
// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRouter);
