import express from 'express';
import {
  createPayment,
  deletePayment,
  getAllPayments,
  getPayment,
  updatePayment
} from '../../../controllers/lead/payment/payment.controller.js';

export const paymentRouter = express.Router();

paymentRouter
  .get('/', getAllPayments)
  .get('/:id', getPayment)
  .post('/', createPayment)
  .put('/:id', updatePayment)
  .delete('/:id', deletePayment);
