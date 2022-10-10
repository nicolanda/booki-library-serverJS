import express from 'express';
import {
  createCity,
  deleteCity,
  getAllCities,
  getCity,
  updateCity
} from '../../../controllers/lead/adressBook/city.controller.js';

export const cityRouter = express.Router();

cityRouter
  .get('/', getAllCities)
  .get('/:id', getCity)
  .post('/', createCity)
  .put('/:id', updateCity)
  .delete('/:id', deleteCity);
