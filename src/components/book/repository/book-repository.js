const models = require('../../../config').db;
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config({ path: '../../../../.env' });

exports.create = async (data) => {
  const book = await models.Book.create(data);
  return book;
};

exports.findById = async (id) => {
  const book = await models.Book.findOne({
    where: { id }
  });

  return book;
};
exports.findAll = async () => {
  const book = await models.Book.findAll();
  return book;
};

exports.deletById = async (id) => {
  const book = await models.Book.destroy({
    where: { id }
  });
  return book;
};

exports.findByName = async (name) => {
  const book = await models.Book.findOne({
    where: { name }
  });
  return book;
};

exports.searchByName = async (name) => {
  const book = await axios.get(`${URL}/books?name=${name}`);
  return book;
};

exports.createAuthor = async (data) => {
  const author = await models.Author.create(data);
  return author;
};

exports.findAuthorByName = async (name) => {
  const author = await models.Author.findOne({ where: { name } });
  return author;
};

exports.createBookAuthors = async (data) => {
  const author = await models.AuthorBook.create(data);
  return author;
};
