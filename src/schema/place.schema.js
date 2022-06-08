const ajvInstance = require("./ajv-instance");

const geocodeSchema = {
  type: "object",
  properties: {
    place_id: { type: "string" },
    language: { type: "string" },
    region: { type: "string" },
    sessiontoken: { type: "string" },
    fields: {
      type: "array",
      items: { type: "string" }
    },
  },
  additionalProperties: false,
};

module.exports = ajvInstance.compile(geocodeSchema);
