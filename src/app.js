const express = require("express");
const cors = require("cors");
const corsOptions = require("./utils/corsOptions");
const config = require("./config");
const router = require("./routes/index");
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

module.exports = app;
