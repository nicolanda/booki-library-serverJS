import { PaymentType } from '../../../models/lead/payment/PaymentType.js';

export const getAllPaymentTypes = async (req, res) => {
  try {
    const paymentTypes = await PaymentType.findAll();
    res.json(paymentTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentType = await PaymentType.findByPk(id);
    if (!paymentType) return res.status(404).json({ message: 'Payment type not found' });
    res.json(paymentType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPaymentType = async (req, res) => {
  try {
    const { name } = req.body;
    const newPaymentType = await PaymentType.create({ name });
    res.json(newPaymentType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePaymentType = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentType = await PaymentType.findByPk(id);
    if (!paymentType) return res.status(404).json({ message: 'Payment type not found' });
    paymentType.set(req.body);
    await paymentType.save();
    return res.json(paymentType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePaymentType = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentType = await PaymentType.findByPk(id);
    if (!paymentType) return res.status(404).json({ message: 'Payment type not found' });
    await paymentType.destroy();
    return res.json({ message: 'Payment type deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
