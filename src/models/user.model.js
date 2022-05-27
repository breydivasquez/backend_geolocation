const pool = require("../database/db");
const tuser = "tuser";

exports.getAll = async () => {
  /**
   * description: query select all users
   */
  const querySelect = {
    name: "get-users",
    text: `SELECT * FROM ${tuser}`,
    rowMode: "object",
  };

  try {
    const { rows } = await pool.query(querySelect);
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.getById = async (id) => {
  /**
   * query select user by id
   */
  const querySelectById = {
    name: "get-user-by-id",
    text: `SELECT * FROM ${tuser} WHERE id_user = $1`,
    values: [id],
    rowMode: "object",
  };

  try {
    const { rows } = await pool.query(querySelectById);
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.insert = async (data) => {
  /**
   * query insert new user
   */

  const queryInsert = {
    name: "insert-user",
    text: `INSERT INTO ${tuser} (username, password, email, description) VALUES($1, $2, $3, $4) RETURNING *`,
    values: [data.username, data.password, data.email, data.description],
    rowMode: "object",
  };
  try {
    const { rows } = await pool.query(queryInsert);
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.update = async (id, data) => {
  /**
   * query update user
   */
  const queryUpdate = {
    name: "update-user",
    text: `UPDATE ${tuser} SET username = $1, email = $2 , description = $3 WHERE id_user = $4 RETURNING *`,
    values: [data.username, data.email, data.description, id],
    rowMode: "object",
  };

  try {
    const { rows } = await pool.query(queryUpdate);
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.remove = async (id) => {
  /**
   * query delete user
   */
  const queryDelete = {
    name: "delete-user",
    text: `DELETE FROM ${tuser} WHERE id_user = $1 RETURNING *`,
    values: [id],
    rowMode: "object",
  };

  try {
    const { rows } = await pool.query(queryDelete);
    return rows;
  } catch (e) {
    throw e;
  }
};
