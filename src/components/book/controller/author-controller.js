const { errorResponseMsg, successResponseMsg } = require('../../../utils');
const { authorService } = require('../service');
exports.createAuthor = async (req, res) => {
  const { body, params } = req;
  const { status, status_code, message, data } = await authorService.create(
    params.bookId,
    body
  );
  if (status_code === 201) {
    return successResponseMsg(res, status, status_code, message, data);
  }
  if (status_code >= 400) {
    return errorResponseMsg(res, status, status_code, message);
  }
};
