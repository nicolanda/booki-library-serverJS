import { Authors } from '../../models/book/Author.js';

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Authors.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Authors.findByPk(id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAuthor = async (req, res) => {
  try {
    const {
      name,
      bornYear,
      country
    } = req.body;
    const newAuthor = await Authors.create({
      name,
      bornYear,
      country
    });

    // const newAuthor = await Authors.bulkCreate(req.body);
    res.json(newAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    // const { name, bornYear, country } = req.body;
    const author = await Authors.findByPk(id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    author.set(req.body);
    // author.name = name;
    // author.bornYear = bornYear;
    // author.country = country;
    await author.save();
    return res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Authors.findByPk(id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    await author.destroy();
    return res.json({ message: 'Author deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
