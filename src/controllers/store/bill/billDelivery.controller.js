import { BillDelivery } from '../../../models/store/bill/BillDelivery.js';

export const getAllBillDelivery = async (req, res) => {
  try {
    const billDelivery = await BillDelivery.findAll();
    res.json(billDelivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBillDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const billDelivery = await BillDelivery.findByPk(id);
    if (billDelivery) {
      res.json(billDelivery);
    } else {
      res.status(404).json({ message: 'BillDelivery not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBillDelivery = async (req, res) => {
  try {
    const { complete, notification } = req.body;
    const newBillDelivery = await BillDelivery.create({
      complete,
      notification
    });
    res.json(newBillDelivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBillDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const billDelivery = await BillDelivery.findByPk(id);
    if (!billDelivery) return res.status(404).json({ message: 'BillDelivery not found' });
    billDelivery.set(req.body);
    await billDelivery.save();
    return res.json(billDelivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBillDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const billDelivery = await BillDelivery.findByPk(id);
    if (!billDelivery) return res.status(404).json({ message: 'BillDelivery not found' });
    await billDelivery.destroy();
    return res.json({ message: 'BillDelivery deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
