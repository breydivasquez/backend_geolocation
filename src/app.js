const express = require("express");
const cors = require("cors");
const corsOptions = require("./utils/corsOptions");
const config = require("./config");
const router = require("./routes/index");
const { logError, errorAjvHandler, errorHandler } = require("./middlewares/error.handler");
const app = express();

// Settings
app.set("port", config.server.port);

// Middlewares initials
app.use(express.json());
// app.use(express.urlencoded({ extends: false }));

// Cors
app.use(cors(corsOptions));

// Routes
app.use(config.api.main, router);

// Middlewares validations
app.use(logError);
app.use(errorAjvHandler);
app.use(errorHandler);

module.exports = app;
