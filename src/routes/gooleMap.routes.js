const router = require("express").Router();
const { directions, distanceMatrix, elevation, geocoding, places, roads } = require("../controllers/googleMap.controller");
const validateRequest = require("../middlewares/validateRequest");
const directionSchema = require("../schema/direction.schema");
const distanceMatrixSchema = require("../schema/distanceMatrix.schema");
const elevationSchema = require("../schema/elevation.schema");
const geocodeSchema = require("../schema/geocode.schema");
const placeSchema = require("../schema/place.schema");
const roadSchema = require("../schema/road.schema");


router.get("/directions", validateRequest(directionSchema), directions);
router.get("/distanceMatrix", validateRequest(distanceMatrixSchema), distanceMatrix);
router.get("/elevation", validateRequest(elevationSchema), elevation);
router.get("/geocoding", validateRequest(geocodeSchema), geocoding);
router.get("/places", validateRequest(placeSchema), places);
router.get("/roads", validateRequest(roadSchema), roads);

module.exports = router;
