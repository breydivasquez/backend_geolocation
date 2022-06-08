const ajvInstance = require("./ajv-instance");

const elevationSchema = {
  type: "object",
  properties: {
    locations: {
      anyOf: [
        { type: "string" },
        {
          type: "array",
          items: [{ type: "integer" }, { type: "integer" }],
          minItems: 2,
          additionalItems: false,
        },
      ],
    },
  },
  required: ["locations"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(elevationSchema);
