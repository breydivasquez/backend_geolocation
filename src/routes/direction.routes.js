const router = require("express").Router();
const { directions } = require("../controllers/geolocation.directions.controller");

router.route("/route").get(directions);
// router.route("/matrix").get(directions);
// router.route("/traveling-salesman").get(directions);
// router.route("/isochrone").get(directions);

module.exports = router;
