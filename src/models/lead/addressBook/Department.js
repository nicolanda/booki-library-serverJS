import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';

export const Department = sequelize.define(
  'department',
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
      unique: true,
      validate: {
        notEmpty: true,
        isAlpha: true
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
