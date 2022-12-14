import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';

export const IdentificationType = sequelize.define(
  'identification_type',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
