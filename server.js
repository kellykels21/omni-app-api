const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Connect to DB
mongoose.connect("mongodb://localhost/omni-api-db", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("database connected.");
});

app.use("/", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
