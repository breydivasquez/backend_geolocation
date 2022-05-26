const { directions } = require("../services/geocoding/directions");

/**
 * @desc Get Directions api 
 * @route GET /api/v1/directions
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