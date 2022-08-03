/* eslint-disable camelcase */
exports.serviceResponse = (status, status_code, message, data) => ({
  status,
  status_code,
  message,
  data
});

exports.successResponseMsg = (res, status, status_code, message, data) =>
  res.status(status_code).json({
    status,
    status_code,
    message,
    data
  });

exports.errorResponseMsg = (res, status, status_code, message) => {
  res.status(status_code).json({
    status,
    status_code,
    message
  });
};
