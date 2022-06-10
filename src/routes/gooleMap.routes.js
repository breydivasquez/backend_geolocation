const router = require("express").Router();
const { directions, distanceMatrix, elevation, geocoding, placeDetails, placesNearby, roads } = require("../controllers/googleMap.controller");
const validateRequest = require("../middlewares/validateRequest");
const directionSchema = require("../schema/direction.schema");
const distanceMatrixSchema = require("../schema/distanceMatrix.schema");
const elevationSchema = require("../schema/elevation.schema");
const geocodeSchema = require("../schema/geocode.schema");
const { placeDetailSchema , placeNearbySchema } = require("../schema/place.schema");
const roadSchema = require("../schema/road.schema");


router.get("/directions", validateRequest(directionSchema), directions);
router.get("/distanceMatrix", validateRequest(distanceMatrixSchema), distanceMatrix);
router.get("/elevation", validateRequest(elevationSchema), elevation);
router.get("/geocoding", validateRequest(geocodeSchema), geocoding);
router.get("/placesDetails", validateRequest(placeDetailSchema), placeDetails);
router.get("/placesNearby", validateRequest(placeNearbySchema), placesNearby);
router.get("/roads", validateRequest(roadSchema), roads);

module.exports = router;
