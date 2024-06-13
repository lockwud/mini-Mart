const {Router} = require("express");
const router = Router();

const user = require("../../../controllers/userController");
const validationError = require("../../../utils/validationError");
const validationScheme = require("../../../validators/validationSchema");
const {checkAvailability} = require("../../../middlewares/userCheck");
const isValid = [validationScheme.userValidationRules, validationError.validateRequestSchema];

router.post("/signUp",isValid, checkAvailability, user.signUp)


module.exports = router;
