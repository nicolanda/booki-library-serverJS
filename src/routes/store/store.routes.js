import express from 'express';
import {
  createStore,
  deleteStore,
  getAllStore,
  getStore,
  updateStore
} from '../../controllers/store/store.controller.js';

export const storeRouter = express.Router();

storeRouter
  .get('/', getAllStore)
  .get('/:id', getStore)
  .post('/', createStore)
  .put('/:id', updateStore)
  .delete('/:id', deleteStore);
