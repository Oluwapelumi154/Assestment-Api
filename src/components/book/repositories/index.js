const bookRepository = require('./book-repository');
const authorRepository = require('./user-repository');

module.exports = Object.freeze({
  bookRepository,
  authorRepository
});
