import { BillStatus } from '../../../models/store/bill/BillStatus.js';

export const getAllBillStatus = async (req, res) => {
  try {
    const billStatus = await BillStatus.findAll();
    res.json(billStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBillStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const billStatus = await BillStatus.findByPk(id);
    if (!billStatus) return res.status(404).json({ message: 'BillStatus not found' });
    res.json(billStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBillStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const newBillStatus = await BillStatus.create({ status });
    res.json(newBillStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBillStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const billStatus = await BillStatus.findByPk(id);
    if (!billStatus) return res.status(404).json({ message: 'BillStatus not found' });
    billStatus.set(req.body);
    await billStatus.save();
    return res.json(billStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBillStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const billStatus = await BillStatus.findByPk(id);
    if (!billStatus) return res.status(404).json({ message: 'BillStatus not found' });
    await billStatus.destroy();
    return res.json({ message: 'BillStatus deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
