import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';

export const House = sequelize.define('House', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validator: {
      notEmpty: true,
      isAlpha: true
    }
  }
}, { timestamps: false });
