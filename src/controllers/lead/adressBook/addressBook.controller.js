import { AddresBook } from '../../../models/lead/addressBook/AddressBook.js';

export const getAllAdres = async (req, res) => {
  try {
    const adressBook = await AddresBook.findAll();
    res.json(adressBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdress = async (req, res) => {
  try {
    const { id } = req.params;
    const adress = await AddresBook.findByPk(id);
    if (!adress) return res.status(404).json({ message: 'Adress not found' });
    res.json(adress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAdress = async (req, res) => {
  try {
    const { postaCode, address } = req.body;
    const newAdress = await AddresBook.create({
      postaCode,
      address
    });
    res.json(newAdress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAdress = async (req, res) => {
  try {
    const { id } = req.params;
    const adress = await AddresBook.findByPk(id);
    if (!adress) return res.status(404).json({ message: 'Adress not found' });
    adress.set(req.body);
    await adress.save();
    return res.json(adress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAdress = async (req, res) => {
  try {
    const { id } = req.params;
    const adress = await AddresBook.findByPk(id);
    if (!adress) return res.status(404).json({ message: 'Adress not found' });
    await adress.destroy();
    return res.json({ message: 'Adress deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
