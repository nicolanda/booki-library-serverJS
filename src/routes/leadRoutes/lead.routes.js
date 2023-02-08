import express from 'express';
import {
  createLead,
  deleteLead,
  getAllLeads,
  getEmailLead,
  getLead,
  updateLead
} from '../../controllers/lead/lead.controller.js';
import { saveEmail, verifyToken } from '../../middleware/userAuth.js';

export const leadRouter = express.Router();

leadRouter
  .get('/', verifyToken, getAllLeads)
  .get('/:id', getLead)
  .get('/:email', getEmailLead)
  .post('/', saveEmail, createLead)
  .put('/:id', updateLead)
  .delete('/:id', deleteLead);
