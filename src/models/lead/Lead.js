import bcrypt from 'bcrypt';
import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';
import { AddresBook } from './addressBook/AddressBook.js';
import { Payment } from './payment/Payment.js';
import { IdentificationType } from './IdentificationType.js';

export const Lead = sequelize.define('lead',
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
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.TEXT,
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
    // token: {
    //   type: DataTypes.STRING(50)
    // },
    confirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    hooks: {
      beforeCreate: async (lead) => {
        lead.password = await bcrypt.hash(lead.password, 10);
      },
      beforeUpdate: async (lead) => {
        lead.password = await bcrypt.hash(lead.password, 10);
      }
    }
  }
);

// relations

Lead.belongsTo(Payment);
Payment.hasMany(Lead);

Lead.belongsTo(AddresBook);
AddresBook.hasMany(Lead);

IdentificationType.hasMany(Lead, {
  foreignKey: {
    allowNull: false
  }
});
Lead.belongsTo(IdentificationType);
