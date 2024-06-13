const { check } = require("express-validator");

exports.userValidationRules = [
  check("email")
  
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid"),

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
    check("username")
    .notEmpty()
    .withMessage("username is required")
    .isLength({ min: 3 })
    .withMessage("username must be at least 3 characters"),
    check("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({min:10, max: 10})
    .withMessage("Phone number must be 10 characters"),

   
];