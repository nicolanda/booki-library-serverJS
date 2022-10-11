import { PriceTax } from '../../models/book/PriceTax.js';

export const getAllPriceTax = async (req, res) => {
  try {
    const priceTax = await PriceTax.findAll();
    res.json(priceTax);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPriceTax = async (req, res) => {
  try {
    const { id } = req.params;
    const priceTax = await PriceTax.findByPk(id);
    if (!priceTax) return res.status(404).json({ message: 'PriceTax not found' });
    res.json(priceTax);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPriceTax = async (req, res) => {
  try {
    const { name, value } = req.body;
    const newPriceTax = await PriceTax.create({ name, value });
    res.json(newPriceTax);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePriceTax = async (req, res) => {
  try {
    const { id } = req.params;
    const priceTax = await PriceTax.findByPk(id);
    if (!priceTax) return res.status(404).json({ message: 'PriceTax not found' });
    priceTax.set(req.body);
    await priceTax.save();
    return res.json(priceTax);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePriceTax = async (req, res) => {
  try {
    const { id } = req.params;
    const priceTax = await PriceTax.findByPk(id);
    if (!priceTax) return res.status(404).json({ message: 'PriceTax not found' });
    await priceTax.destroy();
    return res.json({ message: 'PriceTax deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
