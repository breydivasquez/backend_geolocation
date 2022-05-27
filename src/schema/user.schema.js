const ajvInstance = require("./ajv-instance");

const insertUserSchema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string", format: "password" },
    email: { type: "string", format: "email" },
    description: { type: "string" },
  },
  required: ["username", "password", "email"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(insertUserSchema);