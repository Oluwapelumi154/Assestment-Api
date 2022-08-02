exports.serviceResponse = (status, status_code, message, data) => {
  return {
    status,
    status_code,
    message,
    data
  };
};

exports.successResponseMsg = (res, status, status_code, message, data) => {
  return res.status(status_code).json({
    status,
    status_code,
    message,
    data
  });
};

exports.errResponseMsg = (res, status, status_code, message) => {
  res.status(status_code).json({
    status,
    status_code,
    message
  });
};
