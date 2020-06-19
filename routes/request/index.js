const request = require("express").Router();
const create = require("./create");

request.get("/healthcheck", (req, res) => {
  res.send(200, { message: "Request Connected." });
});

request.post("/new", create);

module.exports = request;
