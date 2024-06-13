const { Router } = require("express");
const route = Router();

const userRoute = require("./userRoute")
//const productRoute = require("./productRoute")
route.use("/user",userRoute)
//route.use("/product", productRoute)

module.exports = route;