import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';

export const Bill = sequelize.define('Bill',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    totalPrice: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    }
  }, { timestamps: true });
