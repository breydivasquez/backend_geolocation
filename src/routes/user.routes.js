const router = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const validateRequest = require("../middlewares/validateRequest");
const userSchema = require("../schema/user.schema");

router.route("/").get(getUsers).post(validateRequest(userSchema), createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
