const schema = require('./schema');
module.exports = Object.freeze({
  bookId: schema.bookId,
  bookToCreate: schema.bookToCreate,
  bookToUpdate: schema.bookToUpdate,
  authorToCreate: schema.authorToCreate
});
