const {
  Client,
  axiosInstance,
} = require("@googlemaps/google-maps-services-js");
const config = require("../../../config");

const API_KEY = config.geocoding.keyGoogle;

const client = new Client();

const directions = async (paramsRequest) => {
  //addition api key to request
  paramsRequest.key = API_KEY;
  
  return await client
    .directions(
      {
        params: paramsRequest,
        timeout: 1000, // milliseconds
      },
      axiosInstance
    )
    .then((r) => r.data)
    .catch((e) => e.response.data);
};

module.exports = directions;