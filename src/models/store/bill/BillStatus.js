import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config';

export const BillStatus = sequelize.define('BillStatus', {
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
}, { timestamps: false });
