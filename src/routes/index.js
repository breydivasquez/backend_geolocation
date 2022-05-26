const router = require("express").Router();
const routesUser = require("./user.routes");
const routesDirection = require("./direction.routes");

router.get("/", (req, res) => res.send("Welcome to api rest outdoorsy"));
router.use("/user", routesUser);
router.use("/directions", routesDirection);
router.use("*", (req, res) =>
  res.status(404).json({
    success: false,
    error: {
      statusCode: 404,
      error: "Not Found",
      message: "Sorry, page not found",
    },
  })
);

module.exports = router;
