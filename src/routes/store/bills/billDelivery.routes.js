import express from 'express';
import {
  createBillDelivery,
  deleteBillDelivery,
  getAllBillDelivery,
  getBillDelivery,
  updateBillDelivery
} from '../../../controllers/store/bill/billDelivery.controller.js';

export const billDeliveryRouter = express.Router();

billDeliveryRouter
  .get('/', getAllBillDelivery)
  .get('/:id', getBillDelivery)
  .post('/', createBillDelivery)
  .put('/:id', updateBillDelivery)
  .delete('/:id', deleteBillDelivery);
