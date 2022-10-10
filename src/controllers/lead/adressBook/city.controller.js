import { City } from '../../../models/lead/addressBook/City.js';

export const getAllCities = async (req, res) => {
  try {
    const cities = await City.findAll();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCity = async (req, res) => {
  const { id } = req.params;
  try {
    const idCity = await City.findByPk(id);
    if (!idCity) return res.status(404).json({ message: 'City not found' });
    res.json(idCity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCity = async (req, res) => {
  try {
    const { name } = req.body;
    const newCity = await City.create({ name });
    res.json(newCity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findByPk(id);
    if (!city) return res.status(404).json({ message: 'City not found' });
    city.set(req.body);
    await city.save();
    return res.json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findByPk(id);
    if (!city) return res.status(404).json({ message: 'City not found' });
    await city.destroy();
    res.json({ message: 'City deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
