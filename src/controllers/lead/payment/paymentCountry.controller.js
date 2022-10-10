import { PaymentCountry } from '../../../models/lead/payment/PaymentCountry.js';

export const getAllPaymentCountries = async (req, res) => {
  try {
    const paymentCountries = await PaymentCountry.findAll();
    res.json(paymentCountries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPaymentCountrie = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentCountrie = await PaymentCountry.findByPk(id);
    if (!paymentCountrie) return res.status(404).json({ message: 'Payment Countrie not found' });
    res.json(paymentCountrie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPaymentCountrie = async (req, res) => {
  try {
    const {
      name
    } = req.body;
    const newPaymentCountrie = await PaymentCountry.create({
      name
    });
    res.json(newPaymentCountrie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePaymentCountrie = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentCountrie = await PaymentCountry.findByPk(id);
    if (!paymentCountrie) return res.status(404).json({ message: 'Payment Countrie not found' });
    paymentCountrie.set(req.body);
    await paymentCountrie.save();
    return res.json(paymentCountrie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePaymentCountrie = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentCountrie = await PaymentCountry.findByPk(id);
    if (!paymentCountrie) return res.status(404).json({ message: 'Payment Countrie not found' });
    await paymentCountrie.destroy();
    return res.json({ message: 'Payment Countrie deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
