import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';

export const PaymentType = sequelize.define('payment_type', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(25),
    allowNull: false,
    validate: {
      isEmpty: false
    }
  }
}, {
  timestamps: false,
  freezeTableName: true
});
