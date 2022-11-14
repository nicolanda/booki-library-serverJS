import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';

export const Authors = sequelize.define(
  'authors',
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
        notEmpty: true
      }
    },
    bornYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
        len: [4]
      }
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
