import { Lead } from '../../models/lead/Lead.js';

export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLead = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await Lead.findByPk(id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLead = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      cellphone,
      identificationNum,
      token,
      confirmed
    } = req.body;
    const newLead = await Lead.create({
      name,
      email,
      password,
      cellphone,
      identificationNum,
      token,
      confirmed
    });
    res.json(newLead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await Lead.findByPk(id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    lead.set(req.body);
    await lead.save();
    return res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await Lead.findByPk(id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    await lead.destroy();
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
