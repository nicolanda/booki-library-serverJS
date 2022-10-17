import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';

export const BillStatus = sequelize.define('bill_status', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
  freezeTableName: true,
  timestamps: false
});
