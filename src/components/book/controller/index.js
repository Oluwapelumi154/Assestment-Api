const controller = require('./book-controller');

module.exports = Object.freeze({
  searchBook: controller.searchBook,
  createBook: controller.createBook,
  getAllBooks: controller.getAllBooks,
  getBook: controller.getBook,
  deleteBook: controller.deleteBook,
  updateBook: controller.updateBook,
  searchBook: controller.searchBook,
  createAuthor: controller.createAuthor,
  addBookAuthors: controller.addBookAuthors
});
