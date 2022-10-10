import express from 'express';
import {
  createDepartment,
  deleteDepartment,
  getAllDepartments,
  getDepartment,
  updatedDepartment
} from '../../../controllers/lead/adressBook/department.controller.js';

export const departmentRouter = express.Router();

departmentRouter
  .get('/', getAllDepartments)
  .get('/:id', getDepartment)
  .post('/', createDepartment)
  .put('/:id', updatedDepartment)
  .delete('/:id', deleteDepartment);
