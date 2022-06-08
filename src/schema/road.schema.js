const ajvInstance = require("./ajv-instance");

const roadSchema = {
  type: "object",
  properties: {
    path: { type: "string" },
    interpolate: { type: "boolean" },
  },
  required: ["path"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(roadSchema);
