import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';

export const PaymentCountry = sequelize.define('PaymentCountry', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, { timestamp: false });
