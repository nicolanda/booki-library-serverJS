import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/api.routes.js';

export const app = express();
// middlewares
app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);
