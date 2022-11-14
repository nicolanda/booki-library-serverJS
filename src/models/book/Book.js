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
    title: {
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
      type: DataTypes.TEXT,
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
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true
      }
    },
    edition: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true
      }
    },
    format: {
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
  through: 'book_category',
  allowNull: false,
  timestamps: false
});

Category.belongsToMany(Book, {
  through: 'book_category',
  allowNull: false,
  timestamps: false
});

Book.belongsToMany(Authors, {
  through: 'book_author',
  allowNull: false,
  timestamps: false
});

Authors.belongsToMany(Book, {
  through: 'book_author',
  allowNull: false,
  timestamps: false
});

PriceDiscount.hasMany(Book, {
  foreignKey: {
    allowNull: true
  }
});
Book.belongsTo(PriceDiscount);

PriceTax.hasMany(Book, {
  foreignKey: {
    allowNull: false
  }
});
Book.belongsTo(PriceTax);
