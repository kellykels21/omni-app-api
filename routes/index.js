const routes = require("express").Router();
const user = require("./user");
const venue = require("./venue");
const request = require("./request");

routes.use("/user", user);
routes.use("/venue", venue);
routes.use("/request", request);

module.exports = routes;
