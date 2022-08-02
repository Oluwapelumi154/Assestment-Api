const { validationResult } = require('express-validator');
const { errResponseMsg } = require('../utils/response');
const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return errResponseMsg(res, 'fail', 422, errors.array());
  };
};

module.exports = validate;
