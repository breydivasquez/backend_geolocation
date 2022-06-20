const { typeError } = require("../utils/typeError");

function logError(err, rew, res, next) {
  next(err);
}

function errorHandler(err, req, res, next) {
  
  const message = [{ type: typeError(err.code ?? 0), description: err.stack }];
  res.status(500).json({
    success: false,
    data: null,
    message: message ?? err.stack
  });
}

function errorAjvHandler(err, req, res, next) {
  if (err.status != undefined) {
    res.status(err.status).json({
      success: false,
      data: null,
      message: err.errors ?? err.stack
    });
  } else {
    next(err);
  }
}
module.exports = { logError, errorAjvHandler, errorHandler };
