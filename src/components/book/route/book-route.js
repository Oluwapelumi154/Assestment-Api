const router = require('express').Router();
const { validate } = require('../../../middlewares');
const {
  searchBook,
  createBook,
  deleteBook,
  getAllBooks,
  updateBook,
  getBook,
  createAuthor,
  addBookAuthors
} = require('../controller');
const { bookToCreate, bookId, authorToCreate } = require('../schema');

router.get('/external-books', searchBook);
router.post('/booksss', addBookAuthors);
router.post('/books', validate(bookToCreate()), createBook);
router.get('/books', getAllBooks);
router.patch('/books/:bookId', validate(bookId()), updateBook);
router.get('/books/:bookId', validate(bookId()), getBook);
router.delete('/books/:bookId', validate(bookId()), deleteBook);
router.post('/author', validate(authorToCreate()), createAuthor);
module.exports = router;
