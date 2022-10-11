import express from 'express';
import {
  createBillStatus,
  deleteBillStatus,
  getAllBillStatus,
  getBillStatus,
  updateBillStatus
} from '../../../controllers/store/bill/billStatus.controller';

export const billStatusRouter = express.Router();

billStatusRouter
  .get('/', getAllBillStatus)
  .get('/:id', getBillStatus)
  .post('/', createBillStatus)
  .put('/:id', updateBillStatus)
  .delete('/:id', deleteBillStatus);
