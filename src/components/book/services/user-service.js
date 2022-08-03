const { randomUUID: uuidv4 } = require('crypto');
const { serviceResponse } = require('../../../utils');
const { userRepository, bookRepository } = require('../repositories');

class userService {
  static async create(bookId, body) {
    try {
      const book = await bookRepository.findById(bookId);
      if (!book) {
        return serviceResponse('fail', 400, 'Invalid bookId');
      }
      const authorId = uuidv4();
      const author = {
        bookId: book.id,
        name: body.name,
        authorId
      };

      const authorExist = await userRepository.findByName(body.name);
      if (authorExist) {
        return serviceResponse(
          'fail',
          400,
          'Author Already Exist on this book'
        );
      }
      const newAuthor = await userRepository.create(author);
      return serviceResponse('success', 201, 'Successfully Added an Author', {
        author: newAuthor
      });
    } catch (err) {
      return serviceResponse('fail', 500, 'Internal Server Error');
    }
  }
}

module.exports = userService;
