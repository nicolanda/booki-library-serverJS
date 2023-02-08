import express from 'express';
import { loginLead } from '../../controllers/lead/login.controller.js';

export const loginRoute = express.Router();

loginRoute
  .post('/', loginLead);
