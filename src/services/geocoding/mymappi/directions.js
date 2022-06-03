const axios = require("axios");
const config = require("../../../config");
const { encodeUri } = require("../../../utils/encodeURI");

const BASE_URL = config.geocoding.apiMymappi;
const API_KEY = config.geocoding.keyMymappi;
const API = "/v2/directions/route/";

/**
 *
 * @param {*} params object {
 * (required) profile: string => The profile used to calculate the route, such as car, pedestrian or bike (e.g. car).
 * (required) orig: string => Origin of the route (e.g. 40.409246,-3.677144).
 * (required) dest: string => Destination of the route (e.g. 40.428924,-3.651969).
 * (optional) wps: string => Intermediate steps along the route (e.g. 40.416906,-3.678286;40.420252,-3.673561;40.426746,-3.671467).
 * (optional) alternatives: boolean => Request alternative routes, if possible (e.g. false).
 * (optional) steps: boolean => Indicate steps along the route (e.g. true)
 * (optional) geometries: string => Format in which to output the route representation (e.g. polyline).
 * (optional) overview: string => How detailed the route representation should be (e.g. simplified).
 * }
 * @description Calculates a route between an origin and a destination, possibly passing through many waypoints. It takes into consideration several configuration options in order to customize the response.
 */

exports.directions = (fil) => {
  let params = {
    apikey: API_KEY,
    orig: fil.origin,
    dest: fil.destination,
    wps: fil.wps ?? "",
    alternatives: fil.alternatives ?? false,
    steps: fil.steps ?? true,
    geometries: fil.geometries ?? "polyline",
    overview: fil.overview ?? "simplified",
  };

  let query = encodeUri(params);

  return axios
    .get(`${BASE_URL}${API}${fil.profile}?${query}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => response.data)
    .catch((e) => e);
};
