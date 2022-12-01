import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/config.js';

export const bookAuthor = sequelize.define('book_author',
  {
    bookId: {
      type: DataTypes.INTEGER,
      notNull: true,
      validate: {
        notEmpty: true,
        isNumeric: true
      }
    },
    authorId: {
      type: DataTypes.INTEGER,
      notNull: true,
      validate: {
        notEmpty: true,
        isNumeric: true
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);
