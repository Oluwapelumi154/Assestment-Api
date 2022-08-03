const router = require('express').Router();
const { validate } = require('../../../middlewares');
const { bookController, userController } = require('../controllers');
const { bookToCreate, bookId, authorToCreate } = require('../schemas');

router.get('/external-books', bookController.searchBook);
router.post('/books', validate(bookToCreate()), bookController.createBook);
router.get('/books', bookController.getAllBooks);
router.patch('/books/:bookId', validate(bookId()), bookController.updateBook);
router.get('/books/:bookId', validate(bookId()), bookController.getBook);
router.delete('/books/:bookId', validate(bookId()), bookController.deleteBook);
router.post(
  '/books/:bookId/author',
  validate(bookId()),
  validate(authorToCreate()),
  userController.createAuthor
);

module.exports = router;
