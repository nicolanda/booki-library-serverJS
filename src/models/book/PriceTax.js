import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';

export const PriceTax = sequelize.define('priceTax', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  value: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, { timestamps: false });
