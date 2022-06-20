const {
  getAll,
  getById,
  insert,
  update,
  remove,
} = require("../models/user.model");

const resBuild = require("../utils/response");

/**
 * @desc Get all users
 * @route GET /api/v1/users
 * @access Private
 */

exports.getUsers = async (req, res, next) => {
  try {
    const users = await getAll();
    const response = resBuild(users);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get user
 * @route GET /api/v1/user/:id
 * @access Private
 */

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await getById(id);

    if (user.length === 0) {
      const response = resBuild(null, 404, "User");
      return res.status(404).json(response);
    }
      
    const response = resBuild(user);

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Create user
 * @route POST /api/v1/user/
 * @access Private
 */

exports.createUser = async (req, res, next) => {
  try {
    const newUser = await insert(req.body);
    const response = resBuild(newUser);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Update user
 * @route POST /api/v1/user/:id
 * @access Private
 */

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updateUser = await update(id, req.body);

    if (updateUser.length === 0) {
      const response = resBuild(updateUser, 404, "User");
      return res.status(404).json(response);
    }
      
    const response = resBuild(updateUser);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Delete user
 * @route POST /api/v1/user/:id
 * @access Private
 */

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteUser = await remove(id);

    if (deleteUser.length === 0) {
      const response = resBuild(deleteUser, 404, "User");
      return res.status(404).json(response);
    }
      
    const response = resBuild(deleteUser);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
