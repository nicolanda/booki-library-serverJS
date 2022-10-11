import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';

export const BillDelivery = sequelize.define('BillDelivery', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  complete: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: false
  },
  notification: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: false });
