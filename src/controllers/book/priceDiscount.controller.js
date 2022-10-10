import { PriceDiscount } from '../../models/book/PriceDiscount.js';

export const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await PriceDiscount.findAll();
    res.json(discounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const discount = await PriceDiscount.findByPk(id);
    if (!discount) return res.status(404).json({ message: 'Discount not found' });
    res.json(discount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDiscount = async (req, res) => {
  try {
    const { name, value, active } = req.body;
    const newDiscount = await PriceDiscount.create({
      name,
      value,
      active
    });
    res.json(newDiscount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const discount = await PriceDiscount.findByPk(id);
    if (!discount) return res.status(404).json({ message: 'Discount not found' });
    discount.set(req.body);
    await discount.save();
    return res.json(discount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const discount = await PriceDiscount.findByPk(id);
    if (!discount) return res.status(404).json({ message: 'Discount not found' });
    await discount.destroy();
    return res.json({ message: 'Discount deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
