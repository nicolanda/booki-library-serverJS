import express from 'express';
import {
  createDiscount,
  deleteDiscount,
  getAllDiscounts,
  getDiscount,
  updateDiscount
} from '../../controllers/book/priceDiscount.controller.js';

export const priceDiscountRouter = express.Router();

priceDiscountRouter
  .get('/', getAllDiscounts)
  .get('/:id', getDiscount)
  .post('/', createDiscount)
  .put('/:id', updateDiscount)
  .delete('/:id', deleteDiscount);
