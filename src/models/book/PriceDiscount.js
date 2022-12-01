import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';

export const PriceDiscount = sequelize.define(
  'price_discount',
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
        notEmpty: true
      }
    },
    value: {
      type: DataTypes.DECIMAL(2, 2),
      allowNull: false,
      validate: {
        notEmpty: true,
        isDecimal: true
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
