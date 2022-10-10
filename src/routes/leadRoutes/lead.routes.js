import express from 'express';
import {
  createLead,
  deleteLead,
  getAllLeads,
  getLead,
  updateLead
} from '../../controllers/lead/lead.controller.js';

export const leadRouter = express.Router();

leadRouter
  .get('/', getAllLeads)
  .get('/:id', getLead)
  .post('/', createLead)
  .put('/:id', updateLead)
  .delete('/:id', deleteLead);
