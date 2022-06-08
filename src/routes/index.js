const router = require("express").Router();
const routesUser = require("./user.routes");
const routesGooleMap = require("./gooleMap.routes");

router.get("/", (req, res) => res.send("Welcome to api rest outdoorsy"));
router.use("/user", routesUser);
router.use("/map", routesGooleMap);
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
