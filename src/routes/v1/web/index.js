const { Router } = require("express");
const route = Router();
const user = require("./userRoute")










route.use("/user", user );





module.exports = route;
