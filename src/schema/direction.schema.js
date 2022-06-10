const ajvInstance = require("./ajv-instance");

const directionSchema = {
  type: "object",
  properties: {
    origin: { type: "string" },
    destination: { type: "string" },
    mode: { type: "string" },
    waypoints: {
      type: "array",
      items: { type: "string" },
    },
    avoid: { type: "string" },
    departure_time: {
      anyOf: [{ type: "number" }, { type: "string" }],
    },
    region: { type: "string" },
    alternatives: { type: "boolean", nullable: true },
    arrival_time: {
      anyOf: [{ type: "string" }, { type: "number" }],
    },
    language: { type: "string" },
    optimize: { type: "boolean" },
    units: { type: "string" },
    transit_routing_preference: { type: "string" },
    traffic_model: { type: "string" },
    transit_mode: { type: "string" },
  },
  required: ["origin", "destination"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(directionSchema);
