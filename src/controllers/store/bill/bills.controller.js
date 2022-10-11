import { Bill } from '../../../models/store/bill/Bill.js';

export const getAllBills = async (req, res) => {
  try {
    const bills = await Bill.findAll();
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findByPk(id);
    if (!bill) return res.status(404).json({ message: 'Bill not found' });
    res.json(bill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBill = async (req, res) => {
  try {
    const { product, quantity, totalPrice } = req.body;
    const newBill = await Bill.create({
      product,
      quantity,
      totalPrice
    });
    res.json(newBill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findByPk(id);
    if (!bill) return res.status(404).json({ message: 'Bill not found' });
    bill.set(req.body);
    await bill.save();
    return res.json(bill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findByPk(id);
    if (!bill) return res.status(404).json({ message: 'Bill not found' });
    await bill.destroy();
    return res.json({ message: 'Bill deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
