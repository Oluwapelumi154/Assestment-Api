const { randomUUID: uuidv4 } = require('crypto');
const { serviceResponse } = require('../../../utils');
const { bookRepository } = require('../repository');
const { bookToUpdate } = require('../schema');

class bookService {
  static async create(body) {
    try {
      const bookExist = await bookRepository.findByName(body.name);
      if (bookExist) {
        return serviceResponse('fail', 400, 'A Book already exist that name');
      }
      const bookId = uuidv4();
      const book = {
        bookId,
        ...body
      };
      const newBook = await bookRepository.create(book);
      return serviceResponse('success', 201, 'Sucessfully Created A Book', {
        book: newBook
      });
    } catch (err) {
      return serviceResponse('fail', 500, 'Internal Server Error');
    }
  }

  static async findById(bookId) {
    try {
      const book = await bookRepository.findById(bookId);
      if (!book) {
        return serviceResponse('fail', 400, 'Invalid bookId');
      }
      return serviceResponse(
        'success',
        200,
        'Successfully fetched a Book',
        book
      );
    } catch (err) {
      console.log(err);
      return serviceResponse('fail', 500, 'Internal Server Error');
    }
  }

  static async findAll() {
    try {
      const book = await bookRepository.findAll();
      return serviceResponse(
        'success',
        200,
        'Successfully fetched All Books',
        book
      );
    } catch (err) {
      return serviceResponse('fail', 500, 'Internal Server Erro');
    }
  }

  static async updateById(bookId, body) {
    try {
      const book = await bookRepository.findById(bookId);
      if (!book) {
        return serviceResponse('fail', 400, 'Invalid BookId');
      }
      book.update({
        name: body.name,
        isbn: body.isBn,
        country: body.country,
        number_of_pages: body.number_of_pages,
        publisher: body.publisher,
        release_date: body.release_date
      });
      return serviceResponse('success', 200, 'Successfully Updated Book', book);
    } catch (err) {
      return serviceResponse('fail', 500, 'Internal Server Error');
    }
  }

  static async deleteById(bookId) {
    try {
      const book = await bookRepository.deletById(bookId);
      if (!book) {
        return serviceResponse('fail', 400, 'Invalid bookId');
      }
      return serviceResponse('sucess', 200, 'Succesfully Deleted Book');
    } catch (err) {
      return serviceResponse('fail', 500, 'Internal Server Error');
    }
  }

  static async search(query) {
    // const data = query.name.substring(1).slice(0, -1);
    // console.log(data);

    try {
      const book = await bookRepository.searchByName(query.name);

      if (!book) {
        return serviceResponse('fail', 400, 'Invalid book Search', book);
      }
    } catch (err) {
      return serviceResponse('fail', 500, 'Internal Server Error');
    }
  }

  static async createAuthor(body) {
    try {
      const authorExist = await bookRepository.findAuthorByName(body.name);
      if (authorExist) {
        return serviceResponse('fail', 400, 'Author Already Exist');
      }
      const authorId = uuidv4();
      const author = {
        authorId,
        name: body.name
      };
      const newAuthor = await bookRepository.createAuthor(author);
      return serviceResponse('success', 201, 'Successfully Created an Author', {
        author: newAuthor
      });
    } catch (err) {
      console.log(err);
      return serviceResponse('fail', 500, 'Internal Server Error');
    }
  }

  static async createBookAuthors(body) {
    try {
      const book = await bookRepository.findById(body.bookId);
      if (!book) {
        return serviceResponse('fail', 400, 'Invalid bookId');
      }
      const data = {
        authorId: body.authorId,
        bookId: body.bookId
      };
      const newBookAuthors = await bookRepository.createBookAuthors(data);
      console.log(newBookAuthors, 'authors');
      return serviceResponse(
        'success',
        201,
        'Successfully Added an Author',
        {}
      );
    } catch (err) {
      console.log(err);
      return serviceResponse('fail', 500, 'Internal Server Error');
    }
  }
}

module.exports = bookService;
