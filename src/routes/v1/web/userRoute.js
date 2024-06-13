const { Router } = require("express");
const router = Router();
const user = require("../../../controllers/userController");

router.post("/signUp", user.signUp);

module.exports = router;
