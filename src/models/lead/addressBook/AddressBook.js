import { sequelize } from '../../../config/config.js';
import { DataTypes } from 'sequelize';
import { City } from './City.js';
import { House } from './House.js';

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

// relations

City.hasMany(AddresBook, {
  foreignKey: {
    allowNull: false
  }
});
AddresBook.belongsTo(City);

House.hasMany(AddresBook, {
  foreignKey: {
    allowNull: false
  }
});

AddresBook.belongsTo(House);
