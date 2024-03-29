import { Op } from 'sequelize';
import { Authors } from '../../models/book/Author.js';
import { Book } from '../../models/book/Book.js';
import { Category } from '../../models/book/Category.js';
import { PriceDiscount } from '../../models/book/PriceDiscount.js';
import { PriceTax } from '../../models/book/PriceTax.js';

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [
        {
          model: Category,
          through: { attributes: [] }
        },
        {
          model: Authors,
          through: { attributes: [] }
        },
        { model: PriceDiscount },
        { model: PriceTax }
      ]
    });
    // console.log(books);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id, {
      include: [
        { model: Category },
        { model: Authors },
        { model: PriceDiscount },
        { model: PriceTax }
      ]
    });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  const {
    title,
    isbn,
    price,
    imgUrl,
    details,
    language,
    edition,
    editorial,
    pages,
    format,
    priceTaxId,
    priceDiscountId,
    categoryIds,
    authorIds
  } = req.body;
  try {
    const categories = await Category.findAll({
      where: [
        {
          id: {
            [Op.in]: categoryIds
          }
        }
      ]
    });

    const authors = await Authors.findAll({
      where: [
        {
          id: {
            [Op.in]: authorIds
          }
        }
      ]
    });

    const newBook = await Book.create({
      title,
      isbn,
      price,
      imgUrl,
      details,
      language,
      edition,
      editorial,
      pages,
      format,
      priceTaxId,
      priceDiscountId
      // Authors: [{
      //   name: req.body.name,
      //   bornYear: req.body.bornYear,
      //   country: req.body.country
      // }],
      // PriceDiscount: [{
      //   discount: req.body.discount,
      //   value: req.body.value
      // }],
    });
    newBook.addCategories(categories);
    newBook.addAuthors(authors);
    // newBook.forEach(element => {
    //   element.addCategory(newBook.id);
    // });
    // await book_category.bulkCreate(category_items);
    res.json(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const getByModel = async (model, modelIds) => {
  return await model.findAll({
    where: [
      {
        id: {
          [Op.in]: modelIds
        }
      }
    ]
  });
};

const getBookParams = ({
  title,
  isbn,
  price,
  imgUrl,
  details,
  language,
  edition,
  editorial,
  pages,
  format,
  priceTaxId,
  priceDiscountId
}) => {
  return {
    title,
    isbn,
    price,
    imgUrl,
    details,
    language,
    edition,
    editorial,
    pages,
    format,
    priceTaxId,
    priceDiscountId
  };
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryIds, authorIds } = req.body;

    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    book.removeCategories();
    book.removeAuthors();

    const newCategories = await getByModel(Category, categoryIds);
    const newAuthors = await getByModel(Authors, authorIds);

    book.set(getBookParams(req.body));
    book.setCategories(newCategories);
    book.setAuthors(newAuthors);

    await book.save();
    return res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    await book.destroy();
    return res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
