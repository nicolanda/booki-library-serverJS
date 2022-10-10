import { Payment } from '../../../models/lead/payment/Payment.js';

export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPayment = async (req, res) => {
  try {
    const {
      cardNumber,
      month,
      year,
      cvc,
      name,
      lastname,
      location,
      address,
      zipCode,
      save
    } = req.body;
    const newPayment = await Payment.create({
      cardNumber,
      month,
      year,
      cvc,
      name,
      lastname,
      location,
      address,
      zipCode,
      save
    });
    res.json(newPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });
    payment.set(req.body);
    await payment.save();
    return res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });
    await payment.destroy();
    return res.json({ message: 'Payment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
