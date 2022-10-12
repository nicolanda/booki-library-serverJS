import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';
import { AddresBook } from './addressBook/AddressBook.js';
import { Payment } from './payment/Payment.js';
import { IdentificationType } from './IdentificationType.js';

export const Lead = sequelize.define('Lead',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      validate: {
        notNull: true
      }
    },
    name: {
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
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [5, 15]
      }
    },
    cellphone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    identificationNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true
      }
    },
    token: {
      type: DataTypes.STRING(50)
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    timestamps: true
  }
);

// relations

Lead.hasMany(Payment, {
  foreignKey: {
    allowNull: false
  }
});
Payment.belongsTo(Lead);

Lead.hasMany(AddresBook, {
  foreignKey: {
    allowNull: false
  }
});
AddresBook.belongsTo(Lead);

IdentificationType.hasMany(Lead, {
  foreignKey: {
    allowNull: false
  }
});
Lead.belongsTo(IdentificationType);
