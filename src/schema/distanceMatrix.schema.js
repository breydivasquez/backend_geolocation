const ajvInstance = require("./ajv-instance");

const distanceMatrixSchema = {
  type: "object",
  properties: {
    origins: {
      type: "array",
      items: [
        {
          type: "object",
          properties: { lat: { type: "number" }, lng: { type: "number" } },
          required: ["lat", "lng"],
        },
        { type: "string" },
      ],
      minItems: 2,
      additionalItems: false,
    },
    destinations: {
      type: "array",
      items: [
        {
          type: "object",
          properties: { lat: { type: "number" }, lng: { type: "number" } },
          required: ["lat", "lng"],
        },
        { type: "string" },
      ],
      minItems: 2,
      additionalItems: false,
    },
    mode: { type: "string" },
    language: { type: "string" },
    region: { type: "string" },
    avoid: { type: "string" },
    units: { type: "string" },
    arrival_time: {
      anyOf: [{ type: "string" }, { type: "number" }],
    },
    departure_time: {
      anyOf: [{ type: "number" }, { type: "string" }],
    },
    traffic_model: { type: "string" },
    transit_mode: { type: "string" },
    transit_routing_preference: { type: "string" },
  },
  required: ["origins", "destinations"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(distanceMatrixSchema);
