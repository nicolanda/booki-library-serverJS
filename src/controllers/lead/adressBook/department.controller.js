import { Department } from '../../../models/lead/addressBook/Department.js';

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const idDepartment = await Department.findByPk(id);
    if (!idDepartment) { return res.status(404).json({ message: 'Department not found' }); }
    res.json(idDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const newDepartment = await Department.create({
      name
    });
    res.json(newDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatedDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id);
    if (!department) { return res.status(404).json({ message: 'Department not found' }); }
    department.set(req.body);
    await department.save();
    return res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const idDepartment = await Department.findByPk(id);
    if (!idDepartment) { return res.status(404).json({ message: 'Department not found' }); }
    await Department.destroy();
    res.status(204).json({ message: 'Department deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
