// const { directions } = require("../services/geocoding/mymappi/directions");
const { directions } = require("../services/geocoding/googleMap/directions");
/**
 * @desc Get Directions api 
 * @route GET /api/v1/directions
 * @access Private
 */

exports.directions =  (req, res, next) => {
  try {
    const response = directions(req.body);
    res.status(200).json(response);  
  } catch (error) {
    next(error);
  }
};