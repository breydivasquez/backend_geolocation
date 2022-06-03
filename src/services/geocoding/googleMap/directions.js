const {
  Client,
  axiosInstance,
} = require("@googlemaps/google-maps-services-js");
const config = require("../../../config");

const API_KEY = config.geocoding.keyGoogle;

const client = new Client();

exports.directions =  (data) => {
  console.log('data',data);

  // return await client
  //   .directions(
  //     {
  //       params: {
  //         origin: "Disneyland",
  //         destination: "Universal Studios Hollywood",
  //         key: API_KEY
  //       },
  //       timeout: 1000, // milliseconds
  //     },
  //     axiosInstance
  //   )
  //   .then((r) => r.data)
  //   .catch((e) => e.response.data);
};
