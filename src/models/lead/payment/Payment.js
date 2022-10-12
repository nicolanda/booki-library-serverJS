import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';
import { PaymentType } from './PaymentType.js';
import { PaymentCountry } from './PaymentCountry.js';

export const Payment = sequelize.define(
  'Payment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    card_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
        len: [16]
      }
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2],
        max: 12,
        main: 1
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [4]
      }
    },
    cvc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3]
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    location: {
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
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [4, 6]
      }
    },
    save: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  { timestamps: true }
);

// relations

PaymentType.hasMany(Payment, {
  foreignKey: {
    allowNull: false
  }
});

Payment.belongsTo(PaymentType);

PaymentCountry.hasMany(Payment, {
  foreignKey: {
    allowNull: false
  }
});

Payment.belongsTo(PaymentCountry);
