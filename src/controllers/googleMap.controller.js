// const { directions } = require("../services/geocoding/mymappi/directions");
const directions = require("../services/geocoding/googleMap/directions");
const distanceMatrix = require("../services/geocoding/googleMap/distanceMatrix");
const elevation = require("../services/geocoding/googleMap/elevation");
const geocoding = require("../services/geocoding/googleMap/geocoding");
const { placeDetails, placesNearby } = require("../services/geocoding/googleMap/places");
const roads = require("../services/geocoding/googleMap/roads");

/**
 * @desc Get Directions api
 * @route GET /api/v1/map/directions
 * @access Private
 */

exports.directions = async (req, res, next) => {
  try {
    const response = await directions(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Distance Matrix api
 * @route GET /api/v1/map/distanceMatrix
 * @access Private
 */

exports.distanceMatrix = async (req, res, next) => {
  try {
    const response = await distanceMatrix(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Elevation api
 * @route GET /api/v1/map/elevation
 * @access Private
 */

exports.elevation = async (req, res, next) => {
  try {
    const response = await elevation(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Geocoding api
 * @route GET /api/v1/map/geocoding
 * @access Private
 */

exports.geocoding = async (req, res, next) => {
  try {
    const response = await geocoding(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Place Details api
 * @route GET /api/v1/map/placeDetails
 * @access Private
 */

exports.placeDetails = async (req, res, next) => {
  try {
    const response = await placeDetails(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Places Nearby api
 * @route GET /api/v1/map/placesNearby
 * @access Private
 */

exports.placesNearby = async (req, res, next) => {
  try {
    const response = await placesNearby(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Roads api
 * @route GET /api/v1/map/roads
 * @access Private
 */

exports.roads = async (req, res, next) => {
  try {
    const response = await roads(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

