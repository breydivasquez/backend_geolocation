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

/**
 * @swagger
 * tags:
 *  name: User
 *  description: Users endpoint
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          description: the name of user    
 *        password:
 *          type: string
 *          description: the password of user
 *        email:
 *          type: string
 *          description: the email of user
 *        description:
 *          type: string
 *          description: some description or observation of user
 *      required:
 *        - username
 *        - password
 *        - email
 *      example:
 *        username: admin
 *        password: C4230@!boelwDw
 *        email: admin@gmail.com
 *        description: this user is admin
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found user
 *        example:
 *          msg: User was not found
 *  parameters:
 *    userId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: this user id
 */

/**
 * @swagger
 * /user:
 *  get:
 *    summary: Return a User list
 *    tags: [User]
 *    responses:
 *      200:
 *        description: the list of users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */

router.get("/", getUsers);

/**
 * @swagger
 * /user/{id}:
 *  get:
 *    summary: Get a user by id
 *    tags: [User]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: the found user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: the user was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 */
router.get("/:id", getUser);

/**
 * @swagger
 * /user:
 *  post:
 *    summary: create a new user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: the user was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: Some server error
 */
router.post("/", validateRequest(userSchema), createUser);

/**
 * @swagger
 * /user/{id}:
 *  put:
 *    summary: Update a user by id
 *    tags: [User]
 *    parameters:
 *     - $ref: '#/components/parameters/userId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: the updated user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: the user was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 */
router.put("/:id", updateUser);

/**
 * @swagger
 * /user/{id}:
 *  delete:
 *    summary: delete a user by id
 *    tags: [User]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: the user was deleted
 *        content:
 *          application/json:
 *            schema:
 *             $ref: '#/components/schemas/User'
 *      400:
 *        description: the user was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'             
 */
router.delete("/:id", deleteUser);

module.exports = router;
