import express from 'express';
import { createPriceTax, deletePriceTax, getAllPriceTax, getPriceTax, updatePriceTax } from '../../controllers/book/priceTax.controller.js';

export const priceTaxRouter = express.Router();

priceTaxRouter
  .get('/', getAllPriceTax)
  .get('/:id', getPriceTax)
  .post('/', createPriceTax)
  .put('/:id', updatePriceTax)
  .delete('/:id', deletePriceTax);
