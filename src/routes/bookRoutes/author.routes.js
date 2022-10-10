import express from 'express';
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthor,
  updateAuthor
} from '../../controllers/book/author.controller.js';

export const authorRouter = express.Router();

authorRouter
  .get('/', getAllAuthors)
  .get('/:id', getAuthor)
  .post('/', createAuthor)
  .put('/:id', updateAuthor)
  .delete('/:id', deleteAuthor);
