import express from 'express';
import {
  createBill,
  deleteBill,
  getAllBills,
  getBill,
  updateBill
} from '../../../controllers/store/bill/bills.controller.js';

export const billsRouter = express.Router();

billsRouter
  .get('/', getAllBills)
  .get('/:id', getBill)
  .post('/', createBill)
  .put('/:id', updateBill)
  .delete('/:id', deleteBill);
