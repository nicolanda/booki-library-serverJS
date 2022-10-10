import express from 'express';
import {
  createPaymentType,
  deletePaymentType,
  getAllPaymentTypes,
  updatePaymentType
} from '../../../controllers/lead/payment/paymentType.controller.js';

export const paymentTypeRouter = express.Router();

paymentTypeRouter
  .get('./', getAllPaymentTypes)
  .get('./:id', getAllPaymentTypes)
  .post('./', createPaymentType)
  .put('./:id', updatePaymentType)
  .delete('./:id', deletePaymentType);
