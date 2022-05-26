const codeError = require("../constants/codeErrorBD.json");

exports.typeError = (e) => codeError.CODE[e] || null;
