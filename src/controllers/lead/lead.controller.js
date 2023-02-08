import { Lead } from '../../models/lead/Lead.js';
import jwt from 'jsonwebtoken';

export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll();
    // console.log(leads);
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

export const getEmailLead = async (req, res) => {
  try {
    const { email } = req.params;
    const lead = await Lead.findOne({ where: { email } });
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
      cellphone,
      password,
      identificationTypeId,
      identificationNum
    } = req.body;
    const newLead = await Lead.create({
      name,
      email,
      password,
      cellphone,
      identificationTypeId,
      identificationNum
    });

    // generate token
    if (newLead) {
      const token = jwt.sign({ id: newLead.id }, process.env.SECRET, {
        expiresIn: 1 * 24 * 60 * 60 * 1000
      });

      res.cookie('jwt', token, { maxAge: 1 * 24 * 60 * 60 });

      console.log('user', newLead);
      console.log('token', token);

      // return info lead
      res.json(newLead);
    } else {
      res.status(409).json({ message: 'Detalles no correctos' });
    }
  } catch (error) {
    console.log(error);
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
