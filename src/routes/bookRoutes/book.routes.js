import express from 'express';
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook
} from '../../controllers/book/book.controller.js';

export const bookRouter = express.Router();

bookRouter
  .get('/', getAllBooks)
  .get('/:id', getBook)
  .post('/', createBook)
  .put('/:id', updateBook)
  .delete('/:id', deleteBook);
