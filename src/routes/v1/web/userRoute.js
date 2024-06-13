const {Router} = require("express");
const router = Router();

const user = require("../../../controllers/userController");
const validationError = require("../../../utils/validationError");
const validationScheme = require("../../../validators/validationSchema");
const {checkAvailability} = require("../../../middlewares/userCheck");
const isValid = [validationScheme.userValidationRules, validationError.validateRequestSchema];

router.post("/signUp",isValid, checkAvailability, user.signUp)
router.get("/users", user.listUsers)
router.get("/:id", user.getUserById)
router.patch("/:id", user.updateUser)
router.delete("/:id",)


module.exports = router;
