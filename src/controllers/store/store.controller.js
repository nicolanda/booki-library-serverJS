import { Store } from '../../models/store/Store.js';

export const getAllStore = async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStore = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findByPk(id);
    if (!store) return res.status(404).json({ message: 'Store not found' });
    res.json(store);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStore = async (req, res) => {
  try {
    const { name, address, phone, email, nit } = req.body;
    const newStore = await Store.create({
      name,
      address,
      phone,
      email,
      nit
    });
    res.json(newStore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStore = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findByPk(id);
    if (!store) return res.status(404).json({ message: 'Store not found' });
    store.set(req.body);
    await store.save();
    return res.json(store);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findByPk(id);
    if (!store) return res.status(404).json({ message: 'Store not found' });
    await store.destroy();
    return res.json({ message: 'Store deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
