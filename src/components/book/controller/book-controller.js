/* eslint-disable camelcase */
const {
  successResponseMsg,
  errResponseMsg
} = require('../../../utils/response');
const { bookService } = require('../service');

exports.createBook = async (req, res) => {
  const { body } = req;
  const { status, status_code, message, data } = await bookService.create(body);
  if (status_code === 201) {
    return successResponseMsg(res, status, status_code, message, data);
  }
  if (status_code >= 400) {
    return errResponseMsg(res, status, message, status_code);
  }
};

exports.getAllBooks = async (req, res) => {
  const { status, status_code, message, data } = await bookService.findAll();
  if (status_code === 200) {
    return successResponseMsg(res, status, status_code, message, data);
  }
  if (status_code >= 400) {
    return errResponseMsg(res, status, message, status_code);
  }
};

exports.getBook = async (req, res) => {
  const { params } = req;
  const { status, status_code, message, data } = await bookService.findById(
    params.bookId
  );
  if (status_code === 200) {
    return successResponseMsg(res, status, status_code, message, data);
  }
  if (status_code >= 400) {
    return errResponseMsg(res, status, status_code, message);
  }
};

exports.updateBook = async (req, res) => {
  const { params, body } = req;
  const { status, status_code, message, data } = await bookService.updateById(
    params.bookId,
    body
  );
  if (status_code === 200) {
    return successResponseMsg(res, status, status_code, message, data);
  }
  if (status_code >= 400) {
    return errResponseMsg(res, status, status_code, message);
  }
};

exports.deleteBook = async (req, res) => {
  const { params } = req;
  const { status, status_code, message, data } = await bookService.deleteById(
    params.bookId
  );
  if (status_code === 200) {
    return successResponseMsg(res, status, status_code, message, data);
  }
  if (status_code >= 400) {
    return errResponseMsg(res, status, status_code, message);
  }
};

exports.searchBook = async (req, res) => {
  const { query } = req;
  const { status, status_code, message, data } = await bookService.search(
    query
  );
  if (status_code === 200) {
    return successResponseMsg(res, status, status_code, message, data);
  }
  if (status_code >= 400) {
    return errResponseMsg(res, status, status_code, message);
  }
};

exports.createAuthor = async (req, res) => {
  const { body } = req;
  const { status, status_code, message, data } = await bookService.createAuthor(
    body
  );
  if (status_code === 201) {
    return successResponseMsg(res, status, status_code, message, data);
  }
  if (status_code >= 400) {
    return errResponseMsg(res, status, status_code, message);
  }
};

exports.addBookAuthors = async (req, res) => {
  const { body } = req;
  const { status, status_code, message, data } =
    await bookService.createBookAuthors(body);
  if (status_code === 201) {
    return successResponseMsg(res, status, status_code, message, data);
  }
  if (status_code >= 400) {
    return errResponseMsg(res, status, status_code, message);
  }
};
