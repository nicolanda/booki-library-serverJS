import { IdentificationType } from '../../models/lead/IdentificationType.js';

export const getAllIdentifications = async (req, res) => {
  try {
    const idtype = await IdentificationType.findAll();
    res.json(idtype);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getIdentification = async (req, res) => {
  try {
    const { id } = req.params;
    const idtype = await IdentificationType.findByPk(id);
    if (!idtype) return res.status(404).json({ message: 'Identification type not found' });
    res.json(idtype);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createIdentification = async (req, res) => {
  try {
    const { id, name } = req.body;
    const newIdType = await IdentificationType.create({ id, name });
    res.json(newIdType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateIdentification = async (req, res) => {
  try {
    const { id } = req.params;
    const idetification = await IdentificationType.findByPk(id);
    if (!idetification) return res.status(404).json({ message: 'Identification type not found' });
    idetification.set(req.body);
    await idetification.save();
    return res.json(idetification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteIdentification = async (req, res) => {
  try {
    const { id } = req.params;
    const idetification = await IdentificationType.findByPk(id);
    if (!idetification) return res.status(404).json({ message: 'Identification type not found' });
    await idetification.destroy();
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
