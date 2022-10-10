import express from 'express';
import {
  createIdentification,
  deleteIdentification,
  getAllIdentifications,
  getIdentification,
  updateIdentification
} from '../../controllers/lead/indetificationType.controller.js';

export const identificationTypeRouter = express.Router();

identificationTypeRouter
  .get('/', getAllIdentifications)
  .get('/:id', getIdentification)
  .post('/', createIdentification)
  .put('/:id', updateIdentification)
  .delete('/:id', deleteIdentification);
