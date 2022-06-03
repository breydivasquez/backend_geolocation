const router = require("express").Router();
const { directions } = require("../controllers/directions.controller");
const validateRequest = require("../middlewares/validateRequest");
const directionSchema = require("../schema/directions.schema");


/**
 * @swagger
 * tags:
 *  name: Direction
 *  description: Directions endpoint
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Direction:
 *      type: object
 *      properties:
 *        origin:
 *          type: string
 *          description: origin
 *        destination:
 *          type: string
 *          description: destination
 *      required:
 *        - origin
 *        - destination
 *      example:
 *        origin: Disneyland
 *        destination: Universal Studios Hollywood
 */

/**
 * @swagger
 * /direction:
 *  get:
 *    summary: get directions
 *    tags: [Direction]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Direction'
 *    responses:
 *      200:
 *        description: successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Direction'
 *      500:
 *        description: Some server error
 */
router.get("/route", validateRequest(directionSchema), directions);

// router.route("/directions").get(directions);
// router.route("/elevation").get(elevation);
// router.route("/geocoding").get(geocoding);
// router.route("/places").get(places);
// router.route("/roads").get(roads);
// router.route("/timeZone").get(timeZone);

module.exports = router;
