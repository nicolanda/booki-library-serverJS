import express from 'express';
import {
  createPaymentCountrie,
  deletePaymentCountrie,
  getAllPaymentCountries,
  getPaymentCountrie,
  updatePaymentCountrie
} from '../../../controllers/lead/payment/paymentCountry.controller.js';

export const paymentCountryRouter = express.Router();

paymentCountryRouter
  .get('/', getAllPaymentCountries)
  .get('/:id', getPaymentCountrie)
  .post('/', createPaymentCountrie)
  .put('/:id', updatePaymentCountrie)
  .delete('/:id', deletePaymentCountrie);
