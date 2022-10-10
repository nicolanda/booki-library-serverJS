import { House } from '../../../models/lead/addressBook/House.js';

export const getAllHouses = async (req, res) => {
  try {
    const Houses = await House.findAll();
    res.json(Houses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const idHouse = await House.findByPk(id);
    if (!idHouse) return res.status(404).json({ message: 'House not found' });
    res.json(idHouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createHouse = async (req, res) => {
  try {
    const { description } = req.body;
    const newHouse = await House.create({ description });
    res.json(newHouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await House.findByPk(id);
    if (!house) return res.status(404).json({ message: 'House not found' });
    house.set(req.body);
    await house.save();
    return res.json(house);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const idHouse = await House.findByPk(id);
    if (!idHouse) return res.status(404).json({ message: 'House not found' });
    await House.destroy();
    res.json({ message: 'House deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
