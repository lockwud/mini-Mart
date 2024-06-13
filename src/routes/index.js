const { Router } = require("express");
const mainRoter = Router();
const indexRoute = require("../routes/v1/index");

mainRoter.use("/v1", indexRoute);

module.exports = mainRoter;
