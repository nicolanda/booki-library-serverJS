import express from 'express';
import {
  createAdress,
  deleteAdress,
  getAdress,
  getAllAdres,
  updateAdress
} from '../../../controllers/lead/adressBook/addressBook.controller.js';

export const addressBookRouter = express.Router();

addressBookRouter
  .get('/', getAllAdres)
  .get('/:id', getAdress)
  .post('/', createAdress)
  .put('/:id', updateAdress)
  .delete('/:id', deleteAdress);
