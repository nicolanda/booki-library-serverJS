import { sequelize } from '../../config/config.js';

export const PriceTax = sequelize.define('priceTax', {
  id: {},
  name: {},
  value: {}
}, { timestamps: false });
