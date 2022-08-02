const { body, param } = require('express-validator');

module.exports = {
  bookId: () => [param('bookId').isInt().withMessage('Invalid Id')],

  bookToCreate: () => [
    body('name').notEmpty().withMessage('This is a required field'),
    body('isbn')
      .isISBN()
      .withMessage('Invalid isbn')
      .notEmpty()
      .withMessage('This is a required field'),
    body('number_of_pages')
      .isInt()
      .notEmpty()
      .withMessage('This is a required field'),
    body('publisher').notEmpty().withMessage('This is a required field'),
    body('country').notEmpty().withMessage('This is a required field'),
    body('release_date')
      .isISO8601()
      .withMessage('Invalid date format! date should be in the form yy-mm-dd')
      .notEmpty()
      .withMessage('This is a required field')
  ],

  bookToUpdate: () => [
    body('name').optional(),
    body('isbn').isISBN().withMessage('Invalid isbn').optional(),
    body('number_of_pages').isInt().optional(),
    body('publisher').optional(),
    body('country').optional(),
    body('release_date')
      .isISO8601()
      .withMessage('Invalid date format! date should be in the form yy-mm-dd')
      .optional()
  ],

  authorToCreate: () => [
    body('name').notEmpty().withMessage('This is a required field')
  ]
};
