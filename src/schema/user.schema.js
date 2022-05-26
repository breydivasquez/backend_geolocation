const ajvInstance = require("./ajv-instance");

const insertUserSchema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string", format: "password" },
    mail: { type: "string", format: "email" },
    description: { type: "string" },
  },
  required: ["username", "password", "mail"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(insertUserSchema);