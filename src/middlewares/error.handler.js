const { typeError } = require("../utils/typeError");

function logError(err, rew, res, next) {
  next(err);
}

function errorHandler(err, req, res, next) {
  const message = [{ message: typeError(err.code), description: err.stack }];
  res.status(500).json({
    success: false,
    data: null,
    error: message ?? err.stack,
    statusCode: 500,
  });
}

function errorAjvHandler(err, req, res, next) {
  if (err.status != undefined) {
    res.status(err.status).json({
      success: false,
      data: null,
      error: err.errors?? err.stack,
      statusCode: err.status,
    });
  } else {
    next(err);
  }
}
module.exports = { logError, errorAjvHandler, errorHandler };
