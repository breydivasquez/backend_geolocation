const { typeError } = require("../utils/typeError");

const estructureResponse = (
  data = null,  
  code = null,
  value = ""
) => {
  const message =
  code == null
      ? []
      : [{ type: value, description: typeError(code) }];
  return {
    success: code == null ? true: false,
    data: data,
    message: message
  };
};

module.exports = estructureResponse;
