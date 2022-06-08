// const { directions } = require("../services/geocoding/mymappi/directions");
const directions = require("../services/geocoding/googleMap/directions");
const distanceMatrix = require("../services/geocoding/googleMap/distanceMatrix");
const elevation = require("../services/geocoding/googleMap/elevation");
const geocoding = require("../services/geocoding/googleMap/geocoding");
const places = require("../services/geocoding/googleMap/places");
const roads = require("../services/geocoding/googleMap/roads");

/**
 * @desc Get Directions api
 * @route GET /api/v1/map/directions
 * @access Private
 */

exports.directions = (req, res, next) => {
  try {
    const response = directions(req.body);
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

exports.distanceMatrix = (req, res, next) => {
  try {
    const response = distanceMatrix(req.body);
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

exports.elevation = (req, res, next) => {
  try {
    const response = elevation(req.body);
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

exports.geocoding = (req, res, next) => {
  try {
    const response = geocoding(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Places api
 * @route GET /api/v1/map/places
 * @access Private
 */

exports.places = (req, res, next) => {
  try {
    const response = places(req.body);
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

exports.roads = (req, res, next) => {
  try {
    const response = roads(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

