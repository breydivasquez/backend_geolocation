const ajvInstance = require("./ajv-instance");

const schema1 = {
  type: "object",
  properties: {
    place_id: { type: "string" },
    language: { type: "string" },
    region: { type: "string" },
    sessiontoken: { type: "string" },
    fields: {
      type: "array",
      items: { type: "string" },
    },
  },
  required: ["place_id"],
  additionalProperties: false,
};

const schema2 = {
  type: "object",
  properties: {
    location: {
      type: "object",
      properties: { lat: { type: "number" }, lng: { type: "number" } },
      required: ["lat", "lng"],
    },
    radius: { type: "number" },
    keyword: { type: "string" },
    language: { type: "string" },
    minprice: { type: "number" },
    maxprice: { type: "number" },
    name: { type: "string" },
    opennow: { type: "boolean" },
    rankby: { type: "string" },
    type: { type: "string" },
    pagetoken: { type: "string" },
  },
  required: ["location"],
  additionalProperties: false,
};

const placeDetailSchema = ajvInstance.compile(schema1);
const placeNearbySchema = ajvInstance.compile(schema2);

module.exports = { placeDetailSchema, placeNearbySchema };
