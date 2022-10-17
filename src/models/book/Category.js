import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';

export const Category = sequelize.define('category', {
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
  }
}, {
  freezeTableName: true,
  timestamps: false
});
