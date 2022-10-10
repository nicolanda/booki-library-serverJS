import { sequelize } from '../../../config/config.js';
import { DataTypes } from 'sequelize';

export const AddresBook = sequelize.define(
  'AddressBook',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    postaCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true
      }
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  { timestamps: true }
);
