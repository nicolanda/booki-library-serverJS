import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/config.js';
import { Lead } from '../../lead/Lead.js';
import { BillDelivery } from './BillDelivery.js';
import { BillStatus } from './BillStatus.js';

export const Bill = sequelize.define('bill',
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
  }, {
    freezeTableName: true,
    timestamps: true
  });

// relations

BillDelivery.hasMany(Bill, {
  foreignKey: {
    allowNull: false
  }
});
Bill.belongsTo(BillDelivery);

Lead.hasMany(Bill, {
  foreignKey: {
    allowNull: false
  }
});
Bill.belongsTo(Lead);

BillStatus.hasMany(Bill, {
  foreignKey: {
    allowNull: false
  }
});
Bill.belongsTo(BillStatus);
