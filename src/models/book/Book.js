import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';
import { Category } from './Category.js';
import { Authors } from './Author.js';
import { PriceDiscount } from './PriceDiscount.js';
import { PriceTax } from './PriceTax.js';

export const Book = sequelize.define('book',
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
    isbn: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    editorial: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    imgUrl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true
      }
    },
    details: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    language: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    freezeTableName: true,
    timestamps: true
  });

// relations

Book.belongsToMany(Category, {
  through: 'BookCategory',
  timestamps: false
});

Category.belongsToMany(Book, {
  through: 'BookCategory',
  timestamps: false
});

Book.belongsToMany(Authors, {
  through: 'BookAuthor',
  timestamps: false
});

Authors.belongsToMany(Book, {
  through: 'BookAuthor',
  timestamps: false
});

PriceDiscount.hasMany(Book, {
  foreignKey: {
    allowNull: false
  }
});
Book.belongsTo(PriceDiscount);

PriceTax.hasMany(Book, {
  foreignKey: {
    allowNull: false
  }
});
Book.belongsTo(PriceTax);
