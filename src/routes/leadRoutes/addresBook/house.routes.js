import express from 'express';
import { createHouse, deleteHouse, getAllHouses, getHouse, updateHouse } from '../../../controllers/lead/adressBook/house.controller.js';

export const houseTypeRouter = express.Router();

houseTypeRouter
  .get('/', getAllHouses)
  .get('/:id', getHouse)
  .post('/', createHouse)
  .put('/:id', updateHouse)
  .delete('/:id', deleteHouse);
