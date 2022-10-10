import express from 'express';
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  updateCategory
} from '../../controllers/book/category.controller.js';

export const categoryRouter = express.Router();

categoryRouter
  .get('/', getAllCategories)
  .get('/:id', getCategory)
  .post('/', createCategory)
  .put('/:id', updateCategory)
  .delete('/:id', deleteCategory);
