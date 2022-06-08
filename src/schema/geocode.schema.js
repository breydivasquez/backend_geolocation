const ajvInstance = require("./ajv-instance");

const geocodeSchema = {
  type: "object",
  properties: {
    place_id: { type: "string" },
    address: { type: "string" },
    bounds: { type: "string" },
    language: { type: "string" },
    region: { type: "string" },
    components: { type: "string" },
  },
  additionalProperties: false,
};

module.exports = ajvInstance.compile(geocodeSchema);
