const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Geocode API",
      version: "1.0.0",
      description: "Api geolocation"
    },
    servers: [
      {
        url: "http://172.22.72.151:5000/api/v1"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
}

module.exports = options;