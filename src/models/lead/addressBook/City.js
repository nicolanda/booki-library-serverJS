import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';

export const City = sequelize.define(
  'City',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlpha: true
      }
    }
  },
  { timestamps: false }
);
