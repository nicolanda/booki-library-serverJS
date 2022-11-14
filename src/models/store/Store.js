import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';
import { Bill } from './bill/Bill.js';
// import { Book } from '../book/Book.js';

export const Store = sequelize.define('store',
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
    address: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true
      }
    },
    nit: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    }
  }, {
    freezeTableName: true,
    timestamps: true
  });

// relations

Store.hasMany(Bill, {
  foreignKey: {
    allowNull: false
  }
});
Bill.belongsTo(Store);

// Store.hasMany(Book, {
//   foreignKey: {
//     allowNull: false
//   }
// });
// Book.belongsTo(Store);
