const routes = require("express").Router();
const user = require("./user");
const venue = require("./venue");

routes.use("/user", user);
routes.use("/venue", venue);

module.exports = routes;
